import * as core from '@actions/core'

import { readFile } from 'fs'
import { join } from 'path'
import { promisify } from 'util'

import { ConfigOptions } from '../typings/domain-types'
import { Optional } from '../typings/standard-types'

import { getProperty } from './utils/properties'
import { isValidFile } from './utils/validators'
import { deserialize } from './utils/serializers'
import { profile } from './utils/profiles'

import { valueError } from './errors/value.error'

const readFileAsync = promisify(readFile)

const total = (key: string, regex = /^(.+)\/(.+)$/): string => {
    let result: Optional<string> = null

    if (key !== 'total') {
        const value = key.match(regex)
        result = value && value[2]
    }

    return result ? result : 'Total'
}

const coverageTable = (coverage: any): string => {
    let coverageText =
        '| File | Lines | Statement | Functions | Branches |\n| --- | --- | --- | --- | --- |\n'

    coverageText += Object.entries<any>(coverage).reduce((text, [key, value]) => {
        const part = `${text}| ${total(key)} | ${value.lines.pct}% | ${value.statements.pct}%`
        return `${part} | ${value.functions.pct}% | ${value.branches.pct}% |\n`
    }, '')

    return coverageText
}

const buildConfigOptions = (): ConfigOptions => {
    const reportType = getProperty('reportType')

    const resourceOptions = { reportType }

    return { resourceOptions }
}

const formatCoverage = async (options: ConfigOptions): Promise<void> => {
    const { reportType } = options.resourceOptions
    const { reportDir, reportName } = profile.reportOptions

    const filePath = join('.', reportDir, reportType, reportName)

    if (!isValidFile(filePath, '.json')) {
        throw valueError(`Invalid coverage report file path: ${filePath}`)
    }

    const data = await readFileAsync(filePath)
    const coverage = deserialize(data.toString())

    core.setOutput('testCoverage', coverageTable(coverage))
}

const runReportCoverageOperation = async (): Promise<void> => {
    const options = buildConfigOptions()

    await formatCoverage(options)
}

export default async function run(): Promise<void> {
    try {
        await runReportCoverageOperation()
    } catch (error) {
        core.setFailed(`Cannot process input report data, message: ${error.message}`)
    }
}

run()

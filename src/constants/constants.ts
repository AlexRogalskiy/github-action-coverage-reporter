import boxen from 'boxen'

import { ReportOptions } from '../../typings/domain-types'

/**
 * Report configuration options
 */
export const REPORT_OPTIONS: Readonly<ReportOptions> = {
    reportDir: 'coverage',
    reportName: 'coverage-final.json',
}

/**
 * Output configuration options
 */
export const OUTPUT_OPTIONS: Readonly<boxen.Options> = {
    padding: 1,
    margin: 1,
    borderStyle: 'single',
    borderColor: 'yellow',
}

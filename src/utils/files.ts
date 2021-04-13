import { accessSync, constants, existsSync, MakeDirectoryOptions, mkdirSync } from 'fs'

export const ensureDirExists = (dir: string, options: MakeDirectoryOptions = { recursive: true }): void => {
    existsSync(dir) || mkdirSync(dir, options)
}

export const isFileExists = (fileName: string, mode = constants.F_OK | constants.R_OK): boolean => {
    try {
        accessSync(fileName, mode)

        return true
    } catch (error) {
        return false
    }
}

import { Profile } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { OUTPUT_OPTIONS, REPORT_OPTIONS } from '../constants/constants'

/**
 * ProfileRecord
 * @desc Type representing image profiles configuration options
 */
export type ProfileRecord = Record<Profile, Partial<ProfileOptions>>

/**
 * Configuration options
 */
export const CONFIG: Readonly<ProfileRecord> = {
    dev: {
        reportOptions: REPORT_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        reportOptions: REPORT_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        reportOptions: REPORT_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
}

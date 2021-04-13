import boxen from 'boxen'

/**
 * ConfigOptions
 * @desc Type representing configuration options
 */
export type ConfigOptions = {
    /**
     * Resource configuration options
     */
    readonly resourceOptions: ResourceOptions
}

//--------------------------------------------------------------------------------------------------
/**
 * ReportOptions
 * @desc Type representing report configuration options
 */
export type ReportOptions = {
    /**
     * Report directory
     */
    readonly reportDir: string
    /**
     * Report name
     */
    readonly reportName: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ResourceOptions
 * @desc Type representing resource options
 */
export type ResourceOptions = {
    /**
     * Report type
     */
    reportType: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profiles options
 */
export type ProfileOptions = {
    /**
     * Report configuration options
     */
    readonly reportOptions: ReportOptions
    /**
     * Output configuration options
     */
    readonly outputOptions?: boxen.Options
}

//--------------------------------------------------------------------------------------------------

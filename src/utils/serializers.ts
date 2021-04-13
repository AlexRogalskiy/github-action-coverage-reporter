export const serialize = (
    obj: any,
    space = 4,
    callback?: (this: any, key: string, value: any) => any
): string => {
    return JSON.stringify(obj, callback, space)
}

export const deserialize = <T>(obj: string, callback?: (this: any, key: string, value: any) => any): T => {
    return JSON.parse(obj, callback)
}

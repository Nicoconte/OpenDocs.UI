import { ErrorResponse } from "../contracts/responses";

export const buildQueryStringFilters = (queryObj: {[key: string]: any}): string => {
    return Object.keys(queryObj).map(k => `${k}=${queryObj[k]}`).join("&");
}

export const isErrorResponse = (obj: any): boolean => {
    let err = obj as ErrorResponse;
    return err.detail !== undefined || 
        err.type !== undefined || 
        err.title !== undefined || 
        err.errors !== undefined;
}
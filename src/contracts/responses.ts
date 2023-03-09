import { Application } from "./application";
import { Settings } from "./settings";

export interface GetAllAplicationResponse {
    applications: Application[]
}

interface ApplicationContent {
    environment: string,
    files: string[]
}

export interface GetApplicationByNameResponse {
    name: string,
    groupId: string,
    content: ApplicationContent[],
}

export interface GetApplicationByGroupResponse {
    applications: Application[]
}

export interface GetAllGroupsResponse {
    groups: string | null
}

export interface GetEnvironmentResponse {
    environments: string[]
}

export interface GetSettingsResponse {
    settings: Settings
}

export interface ErrorResponse {
    type: string,
    title: string,
    status: number,
    detail: string,
    errors: any[]
}
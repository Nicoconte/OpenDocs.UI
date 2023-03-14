export interface Application {
    name: string,
    groupId: string,
    id: string,
    createdAt: string,
    updatedAt: string
}

export interface ApplicationGrouped {
    group: string,
    applications: Application[];
}
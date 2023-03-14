import { apiUrls } from "../constants/api.constant"
import { ErrorResponse, GetAllAplicationResponse, GetApplicationByGroupResponse, GetApplicationByNameResponse } from "../contracts/responses";
import { buildQueryStringFilters } from "../utils/api.utils"
import { axiosClient } from "./base.service"

export const ApplicationService = {
    getAllApplication: async(filters: {} = {}): Promise<GetAllAplicationResponse | ErrorResponse> => {
        try {
            let queryString = buildQueryStringFilters(filters);
            
            let response = await axiosClient.get(`${apiUrls.applicationEndpoint}${queryString}`);

            return response.data as GetAllAplicationResponse;
        } catch(err: any) {
            return err.response.data as ErrorResponse 
        }
    },
    getApplicationByName: async(name: string): Promise<GetApplicationByNameResponse | ErrorResponse> => {
        try {
            let response =  await axiosClient.get(`${apiUrls.applicationEndpoint}/${name}`);
            return response.data as GetApplicationByNameResponse;   
        } catch(err: any) {
            return err.response.data as ErrorResponse;
        }
    },
    deleteApplication: async(name: string): Promise<boolean | ErrorResponse> => {
        try {
            let response = await axiosClient.delete(name);
            return response.status === 200;
        } catch(err: any) {
            return err.response.data as ErrorResponse;
        }
    },
    getApplicationsByGroup: async(groupId: string): Promise<GetApplicationByGroupResponse | ErrorResponse> => {
        try {
            let response = await axiosClient.get(`${apiUrls.groupEndpoint}/${groupId}`);
            return response.data as GetApplicationByGroupResponse
        } catch(err: any) {
            return err.response.data as ErrorResponse;
        }
    } 
}
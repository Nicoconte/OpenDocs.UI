import { apiUrls } from "../constants/api.constant";
import { ErrorResponse, GetAllGroupsResponse } from "../contracts/responses";
import { buildQueryStringFilters } from "../utils/api.utils";
import { axiosClient } from "./base.service";

export const GroupService = {
    getAllGroups: async(filters: {} = {}): Promise<GetAllGroupsResponse | ErrorResponse> => {
        try {
            let queryString: string = buildQueryStringFilters(filters);

            let response = await axiosClient.get(`${apiUrls.groupEndpoint}${queryString}`);

            return response.data as GetAllGroupsResponse;
        } catch(err: any) {
            return err.response.data as ErrorResponse;
        }
    }   
}
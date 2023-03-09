import { apiUrls } from "../constants/api.constant";
import { ErrorResponse, GetEnvironmentResponse } from "../contracts/responses";
import { axiosClient } from "./base.service";


export const SettingService = {
    getEnvironments: async(): Promise<GetEnvironmentResponse | ErrorResponse> => {
        try {
            let response = await axiosClient.get(`${apiUrls.environmentEndpoint}`);
            return response.data as GetEnvironmentResponse;
        } catch(err: any) {
            return err.response.data as ErrorResponse;
        }
    }
}
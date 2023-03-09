import axios from "axios"
import { apiUrls } from "../constants/api.constant"

export const axiosClient = axios.create({
    baseURL: apiUrls.baseUrl
})
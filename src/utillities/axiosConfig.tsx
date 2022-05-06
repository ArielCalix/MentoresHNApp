import { AxiosRequestConfig } from "axios";

const ambiente = {
    baseUrl: "https://626967b8f2c0cdabac0df2e0.mockapi.io/api"
}

export const config: AxiosRequestConfig = {
    baseURL: ambiente.baseUrl,
    headers: {
        'content-type': 'application/json',
        'X-Requested-With': "XMLHttpRequest",
        'Authorization': ""
    }
}
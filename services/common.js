import { getToken, getTokenType } from "@/utils/cookies"
import { API_URL } from "."

export const getProvinceList = (params = {}) => {
    return {
        url: `${API_URL}/getProvinceList`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: params
    }
}

export const getCitiesByProvinceIdAPI = (id = null) => {
    return {
        url: `${API_URL}/getCitiesListOfProvince/${id || null}`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: null
    }
}
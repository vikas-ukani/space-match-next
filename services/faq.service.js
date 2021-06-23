import { API_URL } from "."

export const getFAQList = (params = {}) => {
    return {
        url: `${API_URL}/getFAQList`,
        method: "get",
        headers: { 'Content-Type': 'application/json', },
        body: params
    }
}
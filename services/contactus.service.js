import { getToken, getTokenType } from "@/utils/cookies"
import { API_URL } from "."


export const contactUsAPI = (params = {}) => {
    return {
        url: `${API_URL}/contact-us-form`,
        method: 'post',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: params
    }
}
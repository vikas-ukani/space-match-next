import { getToken, getTokenType } from "@/utils/cookies"
import { API_URL } from ".."


export const getEnquiriesAPI = () => {
    return {
        url: `${API_URL}/enquiry`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: null
    }
}
import { getToken, getTokenType } from "@/utils/cookies"
import { API_URL } from ".."



export const getFavoritesAPI = () => {
    return {
        url: `${API_URL}/space/my-favorites`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: null
    }
}

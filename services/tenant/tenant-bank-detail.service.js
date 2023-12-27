
export const getAPI = () => {
    return {
        url: `${API_URL}/my-bank-detail`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: null
    }
}
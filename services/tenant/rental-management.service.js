import { getToken, getTokenType } from "@/utils/cookies"
import { API_URL } from ".."

export const getTenantPendingApprovalAPI = () => {
    return {
        url: `${API_URL}/tenant-pending-apporval`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: null
    }
}
export const getTenantSiteVisitAPI = () => {
    return {
        url: `${API_URL}/tenant-site-visit`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: null
    }
}
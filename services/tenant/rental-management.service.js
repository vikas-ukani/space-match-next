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

export const getPaymentPipelineAPI = () => {
    return {
        url: `${API_URL}/tenant-payment-pipeline`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: null
    }
}

(_learnq || []).push(['track', 'Viewed Item', {
    Title: item.Name,
    ItemId: item.ProductID,
    Categories: item.Categories,
    ImageUrl: item.ImageURL,
    Url: item.URL,
    Metadata: {
        Brand: item.Brand,
        Price: item.Price,
        CompareAtPrice: item.CompareAtPrice
    }
}]);
export const getDeclinePipelineAPI = () => {
    return {
        url: `${API_URL}/tenant-declined-pipeline`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: null
    }
}

export const getEnquiryByIDAPI = (id) => {
    return {
        url: `${API_URL}/enquiry/${id}`,
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: null
    }
}
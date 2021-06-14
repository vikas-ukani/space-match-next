import { getToken, getTokenType } from "@/utils/cookies"
import { API_URL } from "."


export const LoginAPI = (params = {}) => {
    return {
        url: API_URL + '/login',
        method: 'post',
        body: params
    }
}

export const ForgotPasswordAPI = (params = {}) => {
    return {
        url: API_URL + '/forgotpassword-create',
        method: 'post',
        body: params
    }
}

export const getMe = (params = {}) => {
    return {
        url: API_URL + '/my-profile',
        method: 'get',
        headers: { 'Authorization': `${getTokenType()} ${getToken()}`, 'Content-Type': 'application/json', },
        body: params
    }
}
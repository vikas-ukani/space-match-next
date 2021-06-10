import { API_URL } from "."


export const LoginAPI = (params  = {}) => {
    return {
        url: API_URL + '/login',
        method: 'post',
        body: params
    }
}

export const ForgotPasswordAPI = (params  = {}) => {
    return {
        url: API_URL + '/forgotpassword-create',
        method: 'post',
        body: params
    }
}
import Cookies from "js-cookie"
import { isObject, isString } from "underscore"

export const setToken = (token = null) => {
    // let days  = (process.env.NEXT_PUBLIC_TOKEN_EXP_DAYS || 1)
    // , { expires: days }
    Cookies.set('token', token) || null
}

export const getToken = () => {
    return Cookies.get('token') || null
}

export const getTokenType = () => {
    return Cookies.get('token_type') || null
}

export const setUser = (user = null) => {
    Cookies.set('user', typeof (user) == 'object' ? JSON.stringify(user) : user) || null
}

export const getUser = ( ) => {
    let user = Cookies.get('user') || null
    return user && isString(user) ? JSON.parse(user) : user
}

export const destroyAuth = () => {
    Cookies.remove('token')
    Cookies.remove('token_type')
    Cookies.remove('user')
}

export const setCookie = (key, value = null) => {
    Cookies.set(key, value) || null
}
export const getCookie = (key  ) => {
    return Cookies.get(key) || null
}
export const removeCookie = (key) => {
    Cookies.remove(key)
}
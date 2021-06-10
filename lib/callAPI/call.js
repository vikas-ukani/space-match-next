
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getData = async (URL, Header = {}) => {
    return await axios.get(API_URL + URL, Header).then(res => res.data).catch((err) => err.response.data)
}


export const postData = async (URL, Data, Header = {}) => {
    return await axios.post(API_URL + URL, Data, Header).then(res => res).catch((err) => err.response.data)
}


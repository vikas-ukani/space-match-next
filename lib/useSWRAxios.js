import axios from "axios";
import useSWR from "swr";

export const axiosCall = async ({ url, method, body = null, headers = {} }) => {
    if (method == 'post') {
        return await axios.post(url, body, { headers}).then(res => {
            return res.data
        }).catch(err => {
            return err.response?.data
        })
    } else {
        return await axios.get(url, {headers}).then(res => {
            return res.data
        }).catch(err => {
            return err.response?.data
        })
    }

}

const useFetchAxiosSWR = (params) => {
    const { data, error, mutate, } = useSWR(params && params.url ? params.url : null, axiosCall(params))
    const lists = data || []
    const isPending = !data
    const setData = mutate
    return { data, lists, error, isPending, setData };
}

export const useSWRAxios = (params = {}) => {
    // 
    const { data, lists, error, isPending, setData } = useFetchAxiosSWR(params);

    const postSWR = async (params) => {
        let resData = await axiosCall(params)
        return resData
    }
    const getSWR = async (params) => {
        let resData = await axiosCall(params)
        return resData
    }

    return { data, lists, error, isPending, getSWR, postSWR }
}

import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

const axiosCall = async ({ url, method, body = null }) => {
    return await axios.post(url, body).then(res => {
        return res.data
    }).catch(err => {
        return err.response?.data
    })
}

const useFetchAxiosSWR = (params) => {
    const { data, error, mutate,  } = useSWR(params && params.url ? params.url : null, axiosCall(params))
    const lists = data || []
    const isPending = !data
    const setData = mutate
    return { lists, error, isPending, setData };

}

export const useSWRAxios = (params = {}) => {
    // 
    const { lists, error, isPending, setData } = useFetchAxiosSWR(params);

    const postSWR = async (params) => {
        let resData = await axiosCall(params)
        return resData
    }

    return { lists, error, isPending, postSWR }
}

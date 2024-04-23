import Axios from 'axios';
import { cookieToken } from './index';

export const createAxios = () => {
    const getToken = cookieToken.getCookieToken()
    const authorization = getToken ? `Bearer ${getToken}`:'';
    const controller = new AbortController();
    const signal = controller.signal;
    return Axios.create({
        baseURL: `${import.meta.env.VITE_DEV_SERVER}/api`,
        headers: {
            'Authorization': authorization,
            'Content-Type': 'application/json',
        }, 
        timeout: 10000,
        timeoutErrorMessage: 'Request timed out',
        signal: signal,
        withCredentials: false,
    })
}
import Axios from 'axios';
import { cookieToken } from './index';
import { config } from '../../config';

export const createAxios = () => {
    const url = import.meta.env.MODE ==='development'?config.devServerUrl:config.prodServerUrl;
   
    const getToken = cookieToken.getCookieToken()
    const authorization = getToken ? `Bearer ${getToken}`:'';
    const controller = new AbortController();
    const signal = controller.signal;
    return Axios.create({
        baseURL: `${url}/api`,
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
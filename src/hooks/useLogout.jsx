/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Zustand } from "../libs";
import { cookieToken } from "../utils";

const useLogout = () => {
    const { setIsLogin, setIsAdmin, setUserData, setToken } = Zustand.useStore()
    const [complete, setComplete] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        if (!complete) {
            return
        }
        if (!cookieToken.getCookieToken('userToken') && !cookieToken.getCookieToken('adminToken')) {
            navigate('/')
        }
    }, [complete])
    return () => {
        cookieToken.removeCookieToken('userToken')
        cookieToken.removeCookieToken('adminToken')
        setIsLogin(false)
        setIsAdmin(false)
        setUserData(null)
        setToken(null)
        setComplete(true)
        navigate('/')
    }
}

export default useLogout;
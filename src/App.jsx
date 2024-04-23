/* eslint-disable react/prop-types */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./router";
import { useEffect, useState } from "react";
import { Zustand } from "./libs";
import { axios, cookieToken } from "./utils";

export default function App() {
    const zustand = Zustand.useStore()
    const [login,setLogin] = useState(false)
    const [role,setRole] = useState('user')


    const AutoSignOn = async (token) => {
        try {
            const response = await axios.createAxios().post('/user/getuserbytoken', { token })
            const responseData = response.data
          //  console.log(responseData);
            if (response && response.status === 200) {
                const { data } = responseData
                console.log(data);
                zustand.setIsLogin(true)
                zustand.setUserData(data.data)
                zustand.setIsAdmin(data.data.role)
               if(cookieToken.getCookieToken() !=='undefined' || cookieToken.getCookieToken() !== 'null' || cookieToken.getCookieToken()){
                zustand.setToken(cookieToken.getCookieToken())
               }
            }
        } catch (error) {
           console.log(error);
          if (error.status === 401 || error.status === 403) {
            zustand.setIsLogin(false)
            zustand.setIsAdmin(false)
            zustand.setUserData({})
            cookieToken.removeCookieToken()
          }
        }
    }

    useEffect(() => { 
        if(!zustand.token){ 
            if (cookieToken.getCookieToken()==='undefined' || !cookieToken.getCookieToken()) {
                zustand.setIsLogin(false)
                zustand.setIsAdmin(false)
                zustand.setUserData({})
                cookieToken.removeCookieToken()    
            }
            if(cookieToken.getCookieToken() !=='undefined' || cookieToken.getCookieToken() !== 'null' || cookieToken.getCookieToken()){
                zustand.setToken(cookieToken.getCookieToken())
            }

        }
        if(zustand.token){
            AutoSignOn(zustand.token)
        }
    },[zustand.token])

    useEffect(() => {
        setLogin(zustand.isLogin);
        if (zustand.isAdmin) {
          setRole('admin')  
        }else{
          setRole('user')  
        }        
    },[zustand.isLogin,zustand.isAdmin])



    const base = window.location.origin
    return (
        <BrowserRouter base={`${base}/`} >
        <Routes>
            {
                routes.map((route, index) => {
                  const element =  route.isProtected ? (<ProtectedRoutes login={login}>{ route.isAdmin ? <AdminRoutes role={role}>{ route.element }</AdminRoutes> : route.element }</ProtectedRoutes>) : route.element
                    return  (
                        <Route key={index} path={route.path} element={element } />
                    )
                })
            }
        </Routes>
        </BrowserRouter>
    )
}

const ProtectedRoutes = ({children,login}) => {
    
        return login  ? children : <Navigate to="/login" />
}
const AdminRoutes = ({children,role}) => {
    return role == 'admin' ? children : <Navigate to="/login" />
}

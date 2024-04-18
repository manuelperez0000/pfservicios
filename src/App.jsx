/* eslint-disable react/prop-types */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./router";
import { useEffect } from "react";

export default function App() {
    const login = true
    const role ='admin'
    useEffect(() => {
        
    },[])

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
    
        return login  ? children : <Navigate to="/auth/login" />
}
const AdminRoutes = ({children,role}) => {
    return role == 'admin' ? children : <Navigate to="/auth/login" />
}

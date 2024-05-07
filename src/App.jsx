/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Zustand } from "./libs"
import { cookieToken } from "./utils";
import { Admin, Auth, Checkout, Frontend } from "./pages";
import useAutoSignOn from './hooks/useAutoSignOn';

export default function App() {
    const zustand = Zustand.useStore()
    const { autoSignOn } = useAutoSignOn() // 

    useEffect(() => {
        const token = cookieToken.getCookieToken('userToken');
        //    console.log(token);
        if (token && token !== 'undefined' && token !== 'null') {
            autoSignOn(token)
        } else {
            zustand.setIsLogin(false)
        }
    }, [])

    const base = window.location.origin

    return (
        <BrowserRouter base={`${base}/`} >
            <Routes>
                <Route path="/" exact element={<Frontend.HomePage />} />
                <Route path="/login" element={<Auth.Login />} />
                <Route path="/register" element={<Auth.Register />} />
                <Route path="/recover" element={<Auth.Recover />} />

                <Route path="/checkout" element={
                    <ProtectedRoutes >
                        <Checkout />
                    </ProtectedRoutes>}
                />
                <Route path="/profile" element={
                    <ProtectedRoutes>
                        <Frontend.ProfilePage />
                    </ProtectedRoutes>}
                />
                <Route path="/admin" element={
                    <AdminRoutes>
                        <Admin.Home />
                    </AdminRoutes>}>
                    <Route path="/admin" element={<Admin.AdminPage />} />
                    <Route path="/admin/users" element={<Admin.AdminUsers />} />
                    <Route path="/admin/transactions" element={<Admin.Transactions />} />
                </Route>
                <Route path="*" element={<Frontend.NotFoundPage />} />

            </Routes>
        </BrowserRouter>

    )
}

const ProtectedRoutes = ({ children }) => {
    const token = cookieToken.getCookieToken('userToken');
    return token && token !== 'undefined' && token !== 'null' ? children : <Navigate to="/login" />
}
const AdminRoutes = ({ children }) => {
    const admin = cookieToken.getCookieToken('adminToken');
    return admin && admin === 'true' ? children : <Navigate to="/login" />
}

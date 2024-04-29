/* eslint-disable react/prop-types */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Zustand } from "./libs";
import { axios, cookieToken } from "./utils";
import { Admin, Auth, Checkout, Frontend } from "./pages";

export default function App() {
    const zustand = Zustand.useStore()
    const [login, setLogin] = useState(false)



    const AutoSignOn = async (token) => {
        try {
            const response = await axios.createAxios().post('/user/getuserbytoken', { token })
            const responseData = response.data
            if (response && response.status === 200) {
                const { data } = responseData
                //   console.log(responseData);
                zustand.setIsLogin(true)
                zustand.setUserData(data.data)
                zustand.setIsAdmin(data.data.role)
                setLogin(true)
                if (data.data.role === 'admin') {
                    cookieToken.setCookieToken({ cookieName: 'adminToken', token: 'true' })
                }
            }
        } catch (error) {
            if (error.status === 401 || error.status === 403) {
                zustand.setIsLogin(false)
                zustand.setIsAdmin(false)
                zustand.setUserData({})
                cookieToken.removeCookieToken('userToken')
                setLogin(false)
                if (cookieToken.getCookieToken('adminToken') === 'admin') {
                    cookieToken.removeCookieToken('adminToken')
                }
            }
        }
    }

    useEffect(() => {
        const token = cookieToken.getCookieToken('userToken');
        //    console.log(token);
        if (token && token !== 'undefined' && token !== 'null') {
            AutoSignOn(token)
        } else {
            setLogin(false)
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
                    <ProtectedRoutes login={login}>
                        <Checkout />
                    </ProtectedRoutes>}
                />
                <Route path="/profile" element={
                    <ProtectedRoutes login={login}>
                        <Frontend.ProfilePage />
                    </ProtectedRoutes>}
                />
                <Route path="/admin" element={
                    <AdminRoutes login={zustand.isLogin} role={zustand.isAdmin}>
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

const ProtectedRoutes = ({ children, login }) => {
    const { userData } = Zustand.useStore()

    return login ? children : <Navigate to="/login" />
}
const AdminRoutes = ({ children, role, login }) => {
    return role == 'admin' && login ? children : <Navigate to="/login" />
}

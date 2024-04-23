/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Zustand } from "../../../libs";
import { Menu } from 'primereact/menu';
import { useRef } from "react";
import { cookieToken } from "../../../utils";





const LoginButton = ({navigation})=>{
    return <button  title="Iniciar Sesion" onClick={navigation} className="px-3 py-1 mr-3 font-bold text-white uppercase rounded-md bg-primary hover hover:bg-secondary"> <i className="text-lg bi bi-person"></i> </button>   
}

const LoginContextMenu = ({resetMenu,navigate,isAdmin,userData})=>{
    const menuRight = useRef(null);
    const items =  [
        {
            label: <span className="text-md">{userData.username}</span>,
            items:isAdmin === 'admin'? [
                {
                    label: 'Perfil',
                    icon: 'bi bi-pencil-square',
                    command:()=>{navigate('/profile')}
                },
                {
                    label: 'Administración',
                    icon: 'bi bi-speedometer2',
                    command:()=>{navigate('/admin')}
                },
                {
                    label: 'Cerrar Sesion',
                    icon: 'bi bi-box-arrow-left',
                    command:()=>{resetMenu()}
                }
            ]:[
                {
                    label: 'Perfil',
                    icon: 'bi bi-pencil-square',
                    command:()=>{navigate('/profile')}
                },
                {
                    label: 'Cerrar Sesion',
                    icon: 'bi bi-box-arrow-left',
                    command:()=>{resetMenu()}
                }
            ]
        }
    ] ;
    return (<>
    <button onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup  className="px-3 py-1 mr-3 font-bold text-white uppercase rounded-md bg-primary hover hover:bg-secondary"> <i className="bi bi-person-fill-gear"></i></button>   
     <Menu model={items}  popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
    </>)
}
export default function LoginMenu() {
    const {isLogin, isAdmin, setUserData,setIsLogin,setIsAdmin, setToken, userData} = Zustand.useStore()
    const navigate = useNavigate();

    const navigation = ()=>{
        navigate('/login')
    }
    const resetMenu = ()=>{
        setUserData(null)
        setIsLogin(false)
        setIsAdmin(false)
        setToken(null)
        cookieToken.removeCookieToken()
        navigate('/')
    }
    return isLogin ?  <LoginContextMenu resetMenu={resetMenu} userData={userData} isAdmin={isAdmin} navigate={navigate} />:<LoginButton navigation={navigation} />

}
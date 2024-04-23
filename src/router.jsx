import { createBrowserRouter } from 'react-router-dom';
import { Admin, Auth, Checkout, Frontend } from './pages';



export const frontRoutes = [
  {
    path: "/#",
    title:"Inicio"
  },
  {
    path: "/#about",
    title:"Quienes somos"
  },
  {
    path: "/#services",
    title:"Servicios"
  },
  {
    path: "/#sell-table",
    title:"Planes"
  }
]

export const authRoutes = [
  {
    path: "/login",
    title:"Iniciar sesión"
  },
  {
    path: "/register",
    title:"Registrarse"
  }
]

export const routes = [
  {
    path: "/",
    element: <Frontend.HomePage />,
    title:"Inicio",
    isProtected: false,
    isAdmin: false
  },
  {
    path: "/profile",
    element: <Frontend.ProfilePage />,
    title:"Perfil",
    isProtected: true,
    isAdmin: false
  },
  {
    path:'/admin',
    element: <Admin.Home />,
    title:"Administracíon",
    isProtected: true,
    isAdmin: true
  },
  {
    path:"/login",
    element: <Auth.Login />,
    title:"Inicio de sesión",
    isProtected: false,
    isAdmin: false
  },
  {
    path:"/register",
    element: <Auth.Register />,
    title:"Registro de usuario",
    isProtected: false,
    isAdmin: false
  },
  {
    path:"/recover",
    element: <Auth.Recover />,
    title:"Recuperar cuenta",
    isProtected: false,
    isAdmin: false
  },
  {
    path: "/checkout",
    element: <Checkout />,
    title:"Checkout",
    isProtected: true,
    isAdmin: false
  },
  {
    path: "*",
    element: <Frontend.NotFoundPage />,
    isProtected: false,
    isAdmin: false
  }
]
export const router = createBrowserRouter(routes)
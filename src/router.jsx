import { createBrowserRouter } from 'react-router-dom';
import { Auth, Frontend } from './pages';



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

export const routes = [
  {
    path: "/",
    element: <Frontend.HomePage />,
    title:"Inicio"
  },
  {
    path: "/profile",
    element: <Frontend.ProfilePage />,
    title:"Perfil"
  },
  {
    path:"/auth/login",
    element: <Auth.Login />,
    title:"Inicio de sesión"
  },
  {
    path:"/auth/register",
    element: <Auth.Register />,
    title:"Registro de usuario"
  },
  {
    path:"/auth/recover",
    element: <Auth.Recover />,
    title:"Recuperar cuenta"
  },
  {
    path: "*",
    element: <Frontend.NotFoundPage />,
  }
]
export const router = createBrowserRouter(routes)
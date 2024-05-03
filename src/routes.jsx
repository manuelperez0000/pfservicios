import { Admin, Auth, Checkout, Frontend } from './pages';


export const frontRoutes = [
  {
    path: "/#",
    title: "Inicio",
    isLink: false
  },
  {
    path: "/#about",
    title: "Quienes somos",
    isLink: false
  },
  {
    path: "/#services",
    title: "Servicios",
    isLink: false
  },
  {
    path: "/#sell-table",
    title: "Planes",
    isLink: false
  }
]
export const loggedRoute = [
  {
    path: "/",
    title: "Inicio",
    isLink: true
  },
  {
    path: "/profile",
    title: "Mi perfil",
    isLink: true
  },
  {
    path: `/checkout`,
    title: "Checkout",
    isLink: true
  }
]
export const authRoutes = [
  {
    path: "/",
    title: "Inicio",
    isLink: true
  },
  {
    path: "/login",
    title: "Iniciar sesión",
    isLink: true
  },
  {
    path: "/register",
    title: "Registrarse",
    isLink: true
  }
]

export const adminRoutes = [
  {
    path: "/admin/users",
    title: "Usuarios",
    icon: 'bi bi-people'
  },
  {
    path: "/admin/transactions",
    title: "Transacciones",
    icon: 'bi bi-currency-dollar'
  },
  {
    path: "/",
    title: "Cerrar sesión",
    icon: 'bi bi-box-arrow-left',
    action: 'logout'
  }
]


export const routes = [
  {
    path: "/",
    element: <Frontend.HomePage />,
    title: "Inicio",
    isProtected: false,
    isAdmin: false
  },
  {
    path: "/profile",
    element: <Frontend.ProfilePage />,
    title: "Perfil",
    isProtected: true,
    isAdmin: false
  },
  {
    path: '/admin',
    element: <Admin.Home />,
    title: "Administracíon",
    isProtected: true,
    isAdmin: true,
    children: [
      {
        path: "/admin/users",
        element: <Admin.AdminUsers />,
        title: "Administracíon",
        isProtected: true,
        isAdmin: true
      },
      {
        path: "/admin",
        element: <Admin.Home />,
        title: "Administracíon",
        isProtected: true,
        isAdmin: true
      },
      {
        path: "/admin/transactions",
        element: <Admin.Transactions />,
        title: "Administracíon",
        isProtected: true,
        isAdmin: true
      }
    ]
  },
  {
    path: "/login",
    element: <Auth.Login />,
    title: "Inicio de sesión",
    isProtected: false,
    isAdmin: false
  },
  {
    path: "/register",
    element: <Auth.Register />,
    title: "Registro de usuario",
    isProtected: false,
    isAdmin: false
  },
  {
    path: "/recover",
    element: <Auth.Recover />,
    title: "Recuperar cuenta",
    isProtected: false,
    isAdmin: false
  },
  {
    path: "/checkout",
    element: <Checkout />,
    title: "Checkout",
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
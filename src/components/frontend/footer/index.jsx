import { Link } from "react-router-dom";
import Logo from "../header/logo";
import CopyRight from "../copyRight";
import { Zustand } from "../../../libs";

export default function Footer(){
  const {isLogin,isAdmin} = Zustand.useStore()
    return(
        <footer className="w-full py-6 font-medium tracking-wide text-gray-500 border-t text-sm/relaxed bg-gray-50 dark:text-gray-400 dark:bg-gray-950">
      <div className="container grid gap-8 px-4 mx-auto md:grid-cols-3 lg:px-6">
        <div className="space-y-4 text-center">
          <Link className="font-bold" to="/#">
            <Logo />
          </Link>
          <p>Expertos en informática a su servicio</p>
        </div>
        <div className="space-y-4 text-center">
          <a className="font-bold" href="/#services">
            Servicios
          </a>
          <ul className="space-y-1.5">
            <li>
              <a href="/#system">Optimización de sistemas operativos</a>
            </li>
            <li>
              <a href="/#virus">Eliminación de virus de forma segura</a>
            </li>
            <li>
              <a href="/#servers">Asesoría en gestión de servidores</a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 text-center">
          <a className="font-bold" target="_blank" href={`tel:+${import.meta.env.VITE_TELEPHONE}`}>
            Contactar
          </a>
          {
            isLogin ?(<ul className="space-y-1.5">
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
            {
              isAdmin == 'admin' && (
                <li>
              <Link to="/admin">Administración</Link>
            </li>
              )
            }
          </ul>):(
              <ul className="space-y-1.5">
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </ul>
            )
          }
        </div>
      </div>
        <CopyRight />
    </footer>
    )
}
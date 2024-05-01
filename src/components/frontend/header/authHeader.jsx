import { authRoutes, loggedRoute } from "../../../router";
import { Zustand } from '../../../libs';
import Logo from "./logo";
import NavComponent from "./navComponent";
import LoginMenu from './loginMenu';
import './authHeader.scss'
import ButtonItem from "./buttonItem";

export default function AuthHeader() {
  const { isLogin } = Zustand.useStore()
  return (
    <header
      id="header-auth"
      className={` shadow-md header z-50 fixed top-0 w-full h-[70px] flex items-center justify-center transition-all duration-300 bg-white`}
    >
      <div className="container flex items-center justify-between w-full px-4">
        <Logo logoUrl={'/'} />
        <div className="flex items-center justify-end gap-2 menu-section">

          {
            isLogin ? (<div className="flex items-center justify-end gap-2 "> <div className="hidden md:block"> <NavComponent router={loggedRoute} />  </div> <LoginMenu />  <ButtonItem /></div>) : <div className="flex items-center justify-end gap-2 "> <div className="hidden md:block"> <NavComponent router={authRoutes} /> </div>  <ButtonItem /></div>
          }

        </div>
      </div>
    </header>
  )
}
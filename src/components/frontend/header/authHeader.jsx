import './authHeader.scss'
import { authRoutes } from "../../../router";
import Logo from "./logo";
import NavComponent from "./navComponent";
import { Zustand } from '../../../libs';
import LoginMenu from './loginMenu';

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
          <div className="">
            {
              isLogin ? <LoginMenu /> : <NavComponent router={authRoutes} />
            }
          </div>
        </div>
      </div>
    </header>
  )
}
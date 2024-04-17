import './authHeader.scss'
import { authRoutes } from "../../../router";
import Logo from "./logo";
import NavComponent from "./navComponent";

export default function AuthHeader(){
    return(
        <header
        id="header-auth"
        className={`header z-50 fixed top-0 w-full h-[70px] flex items-center justify-center transition-all duration-300 bg-white`}
      >
        <div className="container flex items-center justify-between w-full px-4">
          <Logo />
          <div className="flex items-center justify-end gap-2 menu-section">
            <div className="hidden md:block">
             <NavComponent router={authRoutes} isLink={true} />
            </div>
          </div>
        </div>
      </header>
    )
}
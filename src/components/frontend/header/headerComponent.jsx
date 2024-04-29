import { useEffect, useState } from "react";
import "./index.scss";

import NavComponent from "./navComponent";
import ButtonItem from "./buttonItem";
import MobileMenu from "./MobileMenu";
import Logo from "./logo";
import WhatsappButton from "../whatsapp/whatsappButton";
import { frontRoutes } from "../../../router";
import LoginMenu from "./loginMenu";

export default function HeaderComponent() {
  const [openMenu, setopenMenu] = useState(false);
  const [scrollMenu, setscrollMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // console.log("down");
        setscrollMenu(true);
      } else {
        // console.log("up");

        setscrollMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <header
        id="top-header"
        className={`header z-50 fixed  w-full h-[70px] bg-white flex items-center justify-center transition-all  duration-600  shadow-stone-950 shadow-sm `}
        style={{ top: scrollMenu ? "0" : "-150px" }}
      >
        <div className="container flex items-center justify-between w-full px-4">
          <Logo logoUrl={'/'} />
          <div className="flex items-center justify-end gap-2 menu-section">
            <div className="hidden md:block">
              <NavComponent router={frontRoutes}
              />
            </div>
            <LoginMenu />
            <ButtonItem open={openMenu} setOpen={setopenMenu} />
          </div>
        </div>
      </header>
      <header
        id="header"
        className={`header z-50 absolute top-0 w-full h-[70px] flex items-center justify-center transition-all duration-300`}
      >
        <div className="container flex items-center justify-between w-full px-4">
          <Logo />
          <div className="flex items-center justify-end gap-2 menu-section">
            <div className="hidden md:block">
              <NavComponent router={frontRoutes}
              />
            </div>
            <LoginMenu />
            <ButtonItem open={openMenu} setOpen={setopenMenu} />
          </div>
        </div>
      </header>
      <MobileMenu open={openMenu} />
      <WhatsappButton show={scrollMenu} />
    </>
  );
}

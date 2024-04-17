
import { frontRoutes } from "../../../router";
import NavComponent from "./navComponent";

// eslint-disable-next-line react/prop-types
 function MobileMenu({ open }) {
  return (
    <nav className={`mobile-menu ${open ? "open" : ""}`}>
      <NavComponent color={{ color: "white", hover: "white" }} router={frontRoutes} />
    </nav>
  );
}

export default MobileMenu
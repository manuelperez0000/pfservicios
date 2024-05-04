import { Zustand } from "../../../libs";
import NavComponent from "./navComponent";

// eslint-disable-next-line react/prop-types
function MobileMenu({ routes }) {
  const { openLateralNav } = Zustand.useStore()

  return (
    <nav className={`mobile-menu ${!openLateralNav ? "open" : ""}`}>
      <NavComponent router={routes} />
    </nav>
  );
}

export default MobileMenu
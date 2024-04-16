
import { frontRoutes} from "../../../router";


function NavComponent() {
  return (
    <nav className="flex items-center justify-center gap-4 menu">
      <ul className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {frontRoutes.map((route) => {
          const isActive = window.location.pathname === route.path;
          return route.title &&  (
            <li
              className={`${isActive ? "active" : ""} nav-link `}
              key={route.title}
            >
              <a href={route.path}>{route.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default NavComponent;

import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';


const LinHref = ({ path, title }) => <a href={path}>{title}</a>

function NavComponent({ router }) {
  console.log(router);
  return (
    <nav className="flex items-center justify-center gap-4 menu">
      <ul className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {router.map((route) => {
          const isActive = window.location.pathname === route.path;
          return route.title && (
            <li
              className={`${isActive ? "active" : ""} nav-link `}
              key={route.title}
            >
              {route.isLink ? <Link to={route.path}>{route.title}</Link> : <LinHref path={route.path} title={route.title} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
LinHref.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string
}
NavComponent.propTypes = {
  router: PropTypes.array,
  isLink: PropTypes.bool
}
export default NavComponent;
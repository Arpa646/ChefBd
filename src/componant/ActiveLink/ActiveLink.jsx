
import { NavLink } from 'react-router-dom';
import './active.css'
const ActiveLink = ({to,children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) => isActive ? "activebg" : ""}
      >
        {children}
      </NavLink>
    );
};

export default ActiveLink;
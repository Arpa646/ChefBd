
import { NavLink } from 'react-router-dom';
import './active.css'
//this is for link for where user user visit will selected  
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
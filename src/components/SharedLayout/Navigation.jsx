import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>

          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

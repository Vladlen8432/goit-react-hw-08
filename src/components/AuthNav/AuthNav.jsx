import { NavLink } from "react-router-dom";

const AuthNav = () => {
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
        </ul>
      </nav>
    </div>
  );
};

export default AuthNav;

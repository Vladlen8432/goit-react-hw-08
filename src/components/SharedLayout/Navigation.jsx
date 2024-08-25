import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logOutThunk } from "../../redux/auth/operations";

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{user?.name}</h3>
      <nav>
        <ul>
          {isLoggedIn && (
            <>
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>

              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={() => dispatch(logOutThunk())}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

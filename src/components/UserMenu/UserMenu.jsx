import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { logOutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{user?.name}</h3>
      <ul>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <button onClick={() => dispatch(logOutThunk())}>Logout</button>
      </ul>
    </div>
  );
};

export default UserMenu;

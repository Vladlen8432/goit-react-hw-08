import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

RestrictedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

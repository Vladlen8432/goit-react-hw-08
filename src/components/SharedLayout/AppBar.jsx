import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const AppBar = () => {
  return (
    <div>
      <header>
        <h1>
          <NavLink to="/">Home</NavLink>
        </h1>
        <Navigation />
      </header>
    </div>
  );
};

export default AppBar;

import { Route, Routes } from "react-router-dom";

import Layout from "./components/SharedLayout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { RestrictedRoute } from "./pages/routes/RestrictedRoute";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { PrivateRoute } from "./pages/routes/PrivateRoute";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operation";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" placeholder="Enter your name" />
          <Field name="email" placeholder="Enter your email" />
          <Field name="password" placeholder="Enter your password" />
          <button type="submit">Register</button>

          <p>
            You already have account? <Link to="login">Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

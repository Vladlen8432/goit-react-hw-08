import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="Enter your email" />
          <Field name="password" placeholder="Enter your password" />
          <button type="submit">Login</button>

          <p>
            You do not have account? <Link to="login">Sign up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

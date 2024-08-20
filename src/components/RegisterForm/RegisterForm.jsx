import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const initialValues = {
    name: "",
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

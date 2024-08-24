import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { addContact } from "../../redux/contacts/operation";

const ContactsForm = ({ onAddContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts?.items ?? []);

  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (name.trim() === "" || number.trim() === "") return;

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number })).then(() => {
      resetForm();
      if (onAddContact) {
        onAddContact();
      }
    });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div>
              <Field
                type="text"
                name="name"
                required
                placeholder="Enter name"
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <br />
            <div>
              <Field
                type="tel"
                name="number"
                required
                placeholder="Enter phone number"
              />
              <ErrorMessage name="number" component="div" />
            </div>
            <br />
            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ContactsForm.propTypes = {
  onAddContact: PropTypes.func,
};

export default ContactsForm;

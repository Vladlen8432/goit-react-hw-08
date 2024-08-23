import { useDispatch } from "react-redux";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactList from "../../components/ContactsList/ContactsList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operation";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Contacts Page</h2>
      <ContactsForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;

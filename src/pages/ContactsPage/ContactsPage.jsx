import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactList from "../../components/ContactsList/ContactsList";
import FilterContacts from "../../components/FilterContacts/FilterContacts";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/slice";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const [showContacts, setShowContacts] = useState(false);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = () => {
    setShowContacts(true);
  };

  return (
    <div>
      <h2>Contacts Page</h2>
      <ContactsForm onAddContact={handleAddContact} />
      {showContacts && (
        <>
          {filteredContacts.length > 0 && <FilterContacts />}
          <ContactList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;

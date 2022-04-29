import styles from "./contactList.module.css";
// import userImage from "../../assets/images/img-user.png";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import getContacts from "../../services/getContactsService";
import { useState, useEffect } from "react";
import deleteOneContact from "../../services/deleteContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);

  // So When we are in HOMEPAGE route => ContactList is gonna render
  useEffect(() => {
    const fetchContact = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContact();
    } catch (error) {}
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
    } catch (error) {
      console.log("error");
    }
    // console.log("clicked", id);
  };

  return (
    <section className={styles.contactList}>
      <div>
        <h1>Contacts</h1>
        <Link to="/add">
          <button className={styles.add_btn}>Add</button>
        </Link>
      </div>
      {contacts ? (
        contacts.map((contact) => {
          // const { name, email, id } = contact;
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={deleteHandler}
            />
          );
        })
      ) : (
        <p>Loading.....</p>
      )}
    </section>
  );
};
export default ContactList;

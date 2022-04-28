import styles from "./contactList.module.css";
// import userImage from "../../assets/images/img-user.png";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className={styles.contactList}>
      <div>
        <h1>Contacts</h1>
        <Link to="/add">
          <button>Add</button>
        </Link>
      </div>
      {contacts.map((contact) => {
        // const { name, email, id } = contact;
        return (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        );
        // <div key={id} className={styles.item}>
        //   <img src={userImage} alt="user" />
        //   <div>
        //     <p>name: {name}</p>
        //     <p>email: {email}</p>
        //   </div>
        //   <button onClick={() => onDelete(id)}>delete</button>
        // </div>
      })}
    </section>
  );
};
export default ContactList;

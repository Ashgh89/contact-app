import styles from "./contactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className={styles.contactList}>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id} className={styles.item}>
            <div>
              <p>name: {name}</p>
              <p>email: {email}</p>
            </div>
            <button onClick={() => onDelete(id)}>delete</button>
          </div>
        );
      })}
    </section>
  );
};
export default ContactList;

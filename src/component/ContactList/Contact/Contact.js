import userImage from "../../../assets/images/img-user.png";
import styles from "../contactList.module.css";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className={styles.item}>
      <img src={userImage} alt="user" />
      <div>
        <p>name: {name}</p>
        <p>email: {email}</p>
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};
export default Contact;

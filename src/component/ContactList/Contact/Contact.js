import { Link } from "react-router-dom";
import userImage from "../../../assets/images/img-user.png";
import styles from "../contactList.module.css";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className={styles.item}>
      <img src={userImage} alt="user" />
      <Link to={`user/${id}`}>
        <div>
          <p>name: {name}</p>
          <p>email: {email}</p>
        </div>
      </Link>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};
export default Contact;

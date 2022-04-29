import { Link } from "react-router-dom";
import userImage from "../../../assets/images/img-user.png";
import styles from "../contactList.module.css";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className={styles.item}>
      <img src={userImage} alt="user" />
      <Link to={`user/${id}`} state={{ data: contact }}>
        <div>
          <p>name: {name}</p>
          <p>email: {email}</p>
        </div>
      </Link>
      <div>
        <Link to={`/edit/${id}`}>
          <button className={styles.edit_Btn}>Edit</button>
        </Link>
        <button onClick={() => onDelete(id)}>delete</button>
      </div>
    </div>
  );
};
export default Contact;
// state -> if we want tp pass data from a router to another router, we use state

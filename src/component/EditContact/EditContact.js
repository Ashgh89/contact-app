import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import getOneContact from "../../services/getOneContact";
import styles from "../AddContact/addContact.module.css";
const EditContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert("Please Enter name or email");
      return;
    }
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: "", email: "" });

    // push to homepage
    navigate("/");
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);
  return (
    <form onSubmit={submitForm}>
      <div className={styles.formControl}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.formControl}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button className={styles.btn_style} type="submit">
        Add Contact
      </button>
    </form>
  );
};
export default EditContact;

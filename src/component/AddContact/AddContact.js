import { useState } from "react";
import { useNavigate } from "react-router-dom";
import addOneContact from "../../services/addContactService";
import styles from "./addContact.module.css";
const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    // When our state is an object, we make a copy (...contact)
    // { ...contact, [e.target.name]: e.target.value } -> With this you can use
    // just one changeHandler for multiple inputs
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("Please Enter name or email");
      return;
    }
    e.preventDefault();
    try {
      await addOneContact(contact);
      // setContact({ name: "", email: "" });
      // push to homepage
      navigate("/");
    } catch (error) {
      console.log("that's error");
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className={styles.formControl}>
        <label>Name</label>
        <input
          type="text"
          // [e.target.name]: up there, is relevant with that one here (name)
          // and its value name=("name") should be equal to that one in useState
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
export default AddContact;

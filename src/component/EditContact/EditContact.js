import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import getOneContact from "../../services/getOneContact";
import styles from "../AddContact/addContact.module.css";
import updateContact from "../../services/updateContact";
const EditContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("Please Enter name or email");
      return;
    }
    e.preventDefault();
    try {
      // id => params
      // put id and data to backend => update
      await updateContact(id, contact);
      // setContact({ name: "", email: "" });
      // push to homepage
      navigate("/");
      // setContacts(data);
    } catch (error) {}
  };

  useEffect(() => {
    // const localFetch = async () => {
    //   try {
    //     const { data } = await getOneContact(id);
    //     setContact({ name: data.name, email: data.email });
    //   } catch (error) {}
    // };
    // localFetch();
    //---ODER-----
    getOneContact(id)
      .then((res) => setContact({ name: res.data.name, email: res.data.email }))
      .catch((err) => console.log(err));
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
        Edit Contact
      </button>
    </form>
  );
};
export default EditContact;

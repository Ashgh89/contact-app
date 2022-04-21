import { useState } from "react";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    // When our state is an object, we make a copy (...contact)
    // { ...contact, [e.target.name]: e.target.value } -> With this you can use
    // just one changeHandler for multiple inputs
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const addContactHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <form onSubmit={addContactHandler}>
      <div className="formControl">
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
      <div className="formControl">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button>Add Contact</button>
    </form>
  );
};
export default AddContact;

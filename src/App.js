// import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./component/AddContact/AddContact";
import ContactDetail from "./component/ContactDetail/ContactDetail";
import ContactList from "./component/ContactList/ContactList";
import EditContact from "./component/EditContact/EditContact";
import addOneContact from "./services/addContactService";

import getContacts from "./services/getContactsService";
import updateContact from "./services/updateContact";

// 1. First -> npm i react-router-dom
// 2. in index.js -> import { BrowserRouter } from "react-router-dom";
//3. and wrap it.
function App() {
  const [contacts, setContacts] = useState([]);

  // const addContactHandler = async (contact) => {
  //   try {
  //     const { data } = await addOneContact(contact);
  //     setContacts([...contacts, data]); // video 150
  //   } catch (error) {
  //     console.log("that's error");
  //   }
  //   // console.log(contact); // So it works, now let's do it
  //   // ceil make the number rond
  //   // ---OR--- I prefer up there
  //   // const newAdded = {
  //   //   id: Math.ceil(Math.random() * 100),
  //   //   name: contact.name,
  //   //   email: contact.email,
  //   // };
  //   // setContacts([...contacts, newAdded]);
  // };

  // const editContactHandler = async (contact, id) => {
  //   try {
  //     // put id and data to backend => update
  //     await updateContact(id, contact);
  //     // get id and data from backend
  //     const { data } = await getContacts();
  //     setContacts(data);
  //   } catch (error) {}
  // };
  // const deleteContactHandler = async (id) => {
  //   try {
  //     await deleteOneContact(id);
  //     const filteredContact = contacts.filter((c) => c.id !== id);
  //     setContacts(filteredContact);
  //   } catch (error) {
  //     console.log("error");
  //   }
  //   // console.log("clicked", id);
  // };

  // useEffect(() => {
  //   const fetchContact = async () => {
  //     const { data } = await getContacts();
  //     setContacts(data);
  //   };
  //   try {
  //     fetchContact();
  //   } catch (error) {}
  // }, []);

  return (
    <main className="App">
      <h1>Contact App </h1>
      <Routes>
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
      </Routes>

      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </main>
  );
}

export default App;

// In this section we want to use JSON server in localhost 3001, make a database
// and this data that so far we have, we want to get them from that JSON server
// We lernt how to use this JSON server in the last sections, but now we want to
// use it in another way.

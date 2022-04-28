// import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./component/AddContact/AddContact";
import ContactDetail from "./component/ContactDetail/ContactDetail";
import ContactList from "./component/ContactList/ContactList";
import deleteOneContact from "./services/deleteContactService";
import getContacts from "./services/getContactsService";

// 1. First -> npm i react-router-dom
// 2. in index.js -> import { BrowserRouter } from "react-router-dom";
//3. and wrap it.
function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // console.log(contact); // So it works, now let's do it
    // ceil make the number rond
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
    // ---OR--- I prefer up there
    // const newAdded = {
    //   id: Math.ceil(Math.random() * 100),
    //   name: contact.name,
    //   email: contact.email,
    // };
    // setContacts([...contacts, newAdded]);
  };
  const deleteContactHandler = async (id) => {
    try {
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
      await deleteOneContact(id);
    } catch (error) {}
    // console.log("clicked", id);
  };
  //localStorage
  // CDM -> get data
  // contacts -> save
  useEffect(() => {
    //JSON parsing is the process of converting a JSON object in text format to a Javascript object
    // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    // if (savedContacts) setContacts(savedContacts);
    const fetchContact = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContact();
    } catch (error) {}
  }, []);
  // localStorage.setItem(key (must be string),value (string));
  //Convert a JavaScript object into a string with JSON.stringify().
  //When sending data to a web server, the data has to be a string.
  useEffect(() => {
    // localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <main className="App">
      <h1>Contact App </h1>
      <Routes>
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          element={
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
          }
        />
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

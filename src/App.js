import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./component/AddContact/AddContact";
import ContactList from "./component/ContactList/ContactList";

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

  const deleteContactHandler = (id) => {
    console.log("clicked", id);
    const filteredContact = contacts.filter((c) => c.id !== id);
    setContacts(filteredContact);
  };

  //localStorage
  // CDM -> get data
  // contacts -> save
  useEffect(() => {
    //JSON parsing is the process of converting a JSON object in text format to a Javascript object
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));

    if (savedContacts) setContacts(savedContacts);
    console.log("1. useEffect");
  }, []);

  // localStorage.setItem(key (must be string),value (string));
  //Convert a JavaScript object into a string with JSON.stringify().
  //When sending data to a web server, the data has to be a string.
  useEffect(() => {
    // this line of code doesn't work, i dunno why
    // localStorage.setItem("contacts", JSON.stringify(contacts));
    if (contacts.length !== 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      console.log("2. useEffect!");
    }
  }, [contacts]);

  const myConsole = (a, b) => {
    console.log("10", contacts);
    return a + b;
  };
  return (
    <main className="App">
      <h1>Contact App </h1>
      <p>{myConsole(5, 5)}</p>

      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} />
    </main>
  );
}

export default App;

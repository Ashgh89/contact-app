import { useState } from "react";
import "./App.css";
import AddContact from "./component/AddContact/AddContact";

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

  return (
    <main className="App">
      <h1>Contact App</h1>
      <AddContact addContactHandler={addContactHandler} />
      <section>Contact List</section>
    </main>
  );
}

export default App;

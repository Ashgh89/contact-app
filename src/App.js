import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./component/AddContact/AddContact";
import ContactDetail from "./component/ContactDetail/ContactDetail";
import ContactList from "./component/ContactList/ContactList";
import EditContact from "./component/EditContact/EditContact";

// 1. First -> npm i react-router-dom
// 2. in index.js -> import { BrowserRouter } from "react-router-dom";
//3. and wrap it.
function App() {
  // const editContactHandler = async (contact, id) => {
  //   try {
  //     // put id and data to backend => update
  //     await updateContact(id, contact);
  //     // get id and data from backend
  //     const { data } = await getContacts();
  //     setContacts(data);
  //   } catch (error) {}
  // };

  return (
    <main className="App">
      <h1>Contact App </h1>
      <Routes>
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
      </Routes>
    </main>
  );
}

export default App;

// In this section we want to use JSON server in localhost 3001, make a database
// and this data that so far we have, we want to get them from that JSON server
// We lernt how to use this JSON server in the last sections, but now we want to
// use it in another way.

import { useState } from "react";
import "./App.css";
import AddContact from "./component/AddContact/AddContact";

function App() {
  const [contacts, setContact] = useState([]);

  const addContactHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
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

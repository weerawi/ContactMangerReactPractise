import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
// import ContactCard from "/.ContactCard";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Thari",
      email: "Tavier@gmail",
      PNumber: "0123456789",
    },

    {
      id: "2",
      name: "Thari",
      email: "Tavier@gmail",
      PNumber: "0123456789",
    },

    {
      id: "3",
      name: "Thari",
      email: "Tavier@gmail",
      PNumber: "0123456789",
    },

    {
      id: "4",
      name: "Thari",
      email: "Tavier@gmail",
      PNumber: "0123456789",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

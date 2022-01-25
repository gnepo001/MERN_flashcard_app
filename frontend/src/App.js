import React from "react";
import { AddCardForm, Navbar, Flashcards } from "./components/index.js";

import "./background.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <AddCardForm />
      <Flashcards />
    </div>
  );
};

export default App;

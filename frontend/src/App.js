import React, { useEffect } from "react";
import { AddCardForm, Navbar, Flashcards } from "./components/index.js";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post.js";

import "./background.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  });

  return (
    <div>
      <Navbar />
      <AddCardForm />
      <Flashcards />
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import {
  AddCardForm,
  Navbar,
  Flashcards,
  FlippableFlashcards,
} from "./components/index.js";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post.js";

import "./App.css";

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
      <FlippableFlashcards />
    </div>
  );
};

export default App;

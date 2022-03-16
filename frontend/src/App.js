import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Flashcards, FlippableFlashcards } from "./components/index.js";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post.js";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Flashcards /> <FlippableFlashcards />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Flashcards,
  FlippableFlashcards,
  Practice,
  Match,
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
        <Route path="/practice" exact element={<Practice />} />
        <Route path="/matchingGame" exact element={<Match />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

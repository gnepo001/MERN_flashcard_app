import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Flashcard from "./Flashcard/Flashcard.jsx";

import useStyles from "./styles.js";

const Flashcards = () => {
  const classes = useStyles();

  //fetching posts from state
  const items = useSelector((state) => state.posts);

  //returns loading cirlce if no flashcards are read in (ie: empty database)
  return !items.length ? (
    <div className={classes.Loading}>
      <CircularProgress />
    </div>
  ) : (
    <div className={classes.FlashcardContainer}>
      {items.map((item) => (
        <Flashcard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Flashcards;

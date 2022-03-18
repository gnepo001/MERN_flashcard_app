import React from "react";
import FlippableCard from "./FlippableCard/FlippableCard";

import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import { useSelector } from "react-redux";

import useStyles from "./styles.js";

const FlippableFlashcards = () => {
  //fetching posts from state
  const items = useSelector((state) => state.posts);

  const classes = useStyles();

  return (
    <div className={classes.flippableCards_cards}>
      {items.map((item) => (
        <FlippableCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default FlippableFlashcards;

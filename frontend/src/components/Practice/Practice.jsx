import React, { useState } from "react";
import FlippableFlashcard from "../FlippableFlashcards/FlippableCard/FlippableCard.jsx";
import { Button, Container, Box } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useSelector } from "react-redux";

import useStyles from "./styles.js";

const Practice = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.posts);

  const [cardIndex, setCardIndex] = useState(0);

  const handleAdd = () => {
    if (cardIndex < items.length - 1) {
      setCardIndex((cardIndex) => cardIndex + 1);
    }
  };
  const handleSub = () => {
    if (cardIndex > 0) {
      setCardIndex((cardIndex) => cardIndex - 1);
    }
  };

  return (
    <>
      <Container className={classes.centerDiv}>
        {items.length ? (
          <FlippableFlashcard
            item={items[cardIndex]}
            key={items[cardIndex]._id}
          />
        ) : null}
      </Container>
      <Box textAlign="center" className={classes.ButtonBar}>
        <Button onClick={handleSub}>
          <ArrowLeftIcon />
        </Button>
        <Button onClick={handleAdd}>
          <ArrowRightIcon />
        </Button>
      </Box>
    </>
  );
};

export default Practice;

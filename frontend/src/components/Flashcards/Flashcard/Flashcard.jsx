import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

import useStyles from "./styles.js";

const Flashcard = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.Flashcard}>
      <CardContent>
        <Typography>{item.word}</Typography>
        <Typography>{item.definition}</Typography>
      </CardContent>
    </Card>
  );
};

export default Flashcard;

import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import useStyles from "./styles.js";

const FlippableCard = ({ item }) => {
  const classes = useStyles();

  const [flipped, setFlipped] = useState({
    status: true,
  });

  return flipped.status ? (
    <div className={classes.card}>
      <Button
        onClick={() => setFlipped({ ...flipped, status: false })}
        className={classes.button}
        color="inherit"
      >
        <Card className={classes.flippableCard_card_front}>
          <CardContent className={classes.flippableCard_card_front_color}>
            <Typography>{item.word}</Typography>
          </CardContent>
        </Card>
      </Button>
    </div>
  ) : (
    <div className={classes.card}>
      <Button
        onClick={() => setFlipped({ ...flipped, status: true })}
        className={classes.button}
      >
        <Card className={classes.flippableCard_card_back}>
          <CardContent>
            <Typography>{item.definition}</Typography>
          </CardContent>
        </Card>
      </Button>
    </div>
  );
};

export default FlippableCard;

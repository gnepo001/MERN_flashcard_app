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
        className={classes.flippableCard_card}
      >
        <Card className={classes.flippableCard_card}>
          <CardContent>
            <Typography>{item.word}</Typography>
          </CardContent>
        </Card>
      </Button>
    </div>
  ) : (
    <div className={classes.card}>
      <Button
        onClick={() => setFlipped({ ...flipped, status: true })}
        className={classes.flippableCard_card}
      >
        <Card className={classes.flippableCard_card}>
          <CardContent>
            <Typography>{item.definition}</Typography>
          </CardContent>
        </Card>
      </Button>
    </div>
  );
};

export default FlippableCard;

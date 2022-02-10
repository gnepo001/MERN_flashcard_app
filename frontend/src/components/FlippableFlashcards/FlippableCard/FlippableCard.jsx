import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import useStyles from "./styles.js";

const FlippableCard = ({ item }) => {
  const classes = useStyles();

  const [flipped, setFlipped] = useState({
    status: true,
  });

  return flipped.status ? (
    <div className={classes.Loading}>
      <Button
        onClick={() => setFlipped({ ...flipped, status: false })}
        className={classes.Card}
      >
        <Card className={classes.Card}>
          <CardContent>
            <Typography>{item.word}</Typography>
          </CardContent>
        </Card>
      </Button>
    </div>
  ) : (
    <div className={classes.Loading}>
      <Button
        onClick={() => setFlipped({ ...flipped, status: true })}
        className={classes.Card}
      >
        <Card className={classes.Card}>
          <CardContent>
            <Typography>{item.definition}</Typography>
          </CardContent>
        </Card>
      </Button>
    </div>
  );
};

export default FlippableCard;

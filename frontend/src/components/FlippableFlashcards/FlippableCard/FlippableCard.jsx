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
      <Button onClick={() => setFlipped({ ...flipped, status: false })}>
        <Card>
          <CardContent className={classes.Front}>
            <Typography>{item.word}</Typography>
          </CardContent>
        </Card>
      </Button>
    </div>
  ) : (
    <div className={classes.Loading}>
      <Button onClick={() => setFlipped({ ...flipped, status: true })}>
        <Card>
          <CardContent className={classes.Back}>
            <Typography>{item.definition}</Typography>
          </CardContent>
        </Card>
      </Button>
    </div>
  );
};

export default FlippableCard;

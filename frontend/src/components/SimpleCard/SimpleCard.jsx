import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import useStyles from "./styles.js";

const SimpleCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.text}>
        <Typography>{item}</Typography>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;

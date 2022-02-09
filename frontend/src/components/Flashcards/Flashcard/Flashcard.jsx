import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import useStyles from "./styles.js";

const Flashcard = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.Flashcard}>
      <CardContent>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography>{item.word}</Typography>
            <Typography>{item.definition}</Typography>
          </Grid>
          <Grid item>
            <CreateIcon />
            <DeleteOutlineIcon />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Flashcard;

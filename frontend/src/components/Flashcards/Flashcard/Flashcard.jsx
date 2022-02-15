import React from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import useStyles from "./styles.js";

const Flashcard = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.flashcard_card}>
      <CardContent>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography>{item.word}</Typography>
            <Typography>{item.definition}</Typography>
          </Grid>
          <Grid item>
            <Button>
              <CreateIcon className={classes.flashcard_button} />
            </Button>
            <Button>
              <DeleteOutlineIcon className={classes.flashcard_button} />
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Flashcard;

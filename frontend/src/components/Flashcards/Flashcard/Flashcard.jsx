import React from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
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
            <Button>
              <CreateIcon className={classes.button} />
            </Button>
            <Button>
              <DeleteOutlineIcon className={classes.button} />
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Flashcard;

import React from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";

import useStyles from "./styles.js";
import { deletePost } from "../../../actions/post.js";

const Flashcard = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.flashcard_card}>
      <CardContent>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={10}>
            <Typography>{item.word}</Typography>
            <Typography>{item.definition}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button>
              <CreateIcon className={classes.flashcard_button} />
            </Button>
            <Button
              onClick={() => {
                dispatch(deletePost(item._id));
              }}
            >
              <DeleteOutlineIcon className={classes.flashcard_button} />
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Flashcard;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";

import useStyles from "./styles.js";
import { createPost } from "../../actions/post.js";

const AddCardForm = () => {
  const [postData, setPostData] = useState({
    word: "",
    definition: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleSubmit = (e) => {
    dispatch(createPost(postData));
    console.log(postData.word);
  };
  return (
    <>
      <Paper elevation={1} className={classes.paper}>
        <form
          autoComplete="off"
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" className={classes.title}>
            Add a New Card!
          </Typography>

          <Box className={classes.input}>
            <TextField
              id="newWord"
              label="New Term"
              //value={postData.word}
              onChange={(e) =>
                setPostData({ ...postData, word: e.target.value })
              }
            />
            <TextField
              id="definition"
              label="Definition"
              value={postData.definition}
              onChange={(e) =>
                setPostData({ ...postData, definition: e.target.value })
              }
            />
          </Box>
          <Box className={classes.buttons}>
            <Button variant="contained" color="secondary">
              Clear
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};

export default AddCardForm;

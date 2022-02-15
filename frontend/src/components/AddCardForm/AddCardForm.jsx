import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";

import useStyles from "./styles.js";
import { createPost } from "../../actions/post.js";

const AddCardForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [postData, setPostData] = useState({
    word: "",
    definition: "",
  });

  //setting data to send to backend
  const handleSubmit = (e) => {
    dispatch(createPost(postData));
    console.log(postData.word);
  };

  return (
    <>
      <Paper elevation={1} className={classes.addForm_paper}>
        <form
          autoComplete="off"
          className={classes.addForm_form}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" className={classes.from_title}>
            Make a new Card!
          </Typography>

          <Box className={classes.addForm_input}>
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
          <Box className={classes.addForm_buttons}>
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

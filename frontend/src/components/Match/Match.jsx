import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";

import { SimpleCard } from "../index.js";
import useStyles from "./styles";

const Match = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.posts);

  let x = null;
  const wordArr = [];
  const randomArr = [];
  const newList = [];

  //need to split up items objs to two seprate arrs in order
  //to randomize defs for the matching game
  for (let i = 0; i < items.length; i++) {
    newList.push(items[i]);
    wordArr.push({ _id: items[i]._id, definition: items[i].definition });
  }
  for (let i = 0; i < items.length; i++) {
    let temp2 = wordArr[Math.floor(Math.random() * wordArr.length)]; //gets random obj

    randomArr.push({ _id: temp2._id, definition: temp2.definition });
    wordArr.splice(wordArr.indexOf(temp2), 1); //deletes random obj so does not get called again
  }
  const checkId = (id) => {
    if (x) {
      if (id === x) {
        console.log("Match");
        console.log(id);
        console.log(x);
        newList.pop();
        console.log(newList);
      } else {
        console.log("no match");
      }
      x = null;
    } else {
      x = id;
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {items.map((ar, i) => (
          <Fragment key={`word${ar._id}`}>
            <Grid item xs={6}>
              <Button fullWidth onClick={() => checkId(ar._id)}>
                <SimpleCard item={items[i].word}></SimpleCard>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth onClick={() => checkId(randomArr[i]._id)}>
                <SimpleCard item={randomArr[i].definition}></SimpleCard>
              </Button>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Match;

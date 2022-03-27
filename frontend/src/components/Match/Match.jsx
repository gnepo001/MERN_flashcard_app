import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";

import { SimpleCard } from "../index.js";
import useStyles from "./styles";

const Match = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.posts);

  let x = null;

  const setId = (id) => {
    x = id;
  };

  const checkId = (id) => {
    if (id === x) {
      console.log("Match");
      console.log(`${id} : ${x}`);
    } else {
      console.log("no match");
      console.log(`${id} : ${x}`);
    }
  };

  const arrs = [];
  const arrs2 = [];
  const arrs3 = [];
  for (let i = 0; i < items.length; i++) {
    let temp = items[i]._id;

    arrs.push({ _id: temp, word: items[i].word });
    arrs2.push({ _id: temp, definition: items[i].definition });
  }
  for (let i = 0; i < items.length; i++) {
    let temp = items[i]._id;
    let temp2 = arrs2[Math.floor(Math.random() * arrs2.length)];
    console.log(temp2);
    arrs3.push({ _id: temp, definition: temp2.definition });
  }

  //items.map((item) => arrs.push({item._id:"test"})); does not Work

  return (
    <div>
      <Grid container spacing={2}>
        {arrs.map((ar) => (
          <Fragment key={`word${ar._id}`}>
            <Grid item xs={6}>
              <Button fullWidth onClick={() => console.log("tt")}>
                <SimpleCard item={ar.word}></SimpleCard>
              </Button>
            </Grid>
          </Fragment>
        ))}
        {arrs3.map((arr) => (
          <Fragment key={`def${arr._id}`}>
            <Grid item xs={6}>
              <Button fullWidth onClick={() => console.log("pressed")}>
                <SimpleCard item={arr.definition}></SimpleCard>
              </Button>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Match;

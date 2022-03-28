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
    console.log(`SetID: ${id}`);
  };

  const checkId = (id) => {
    console.log(`CheckID: ${id}`);
    if (x) {
      if (id === x) {
        console.log("Match");
        console.log(`${x} : ${id}`);
      } else {
        console.log("no match");
        console.log(`${x} : ${id}`);
      }
      x = null;
    } else {
      setId(id);
      console.log(`SetID: ${id}`);
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
    let temp3 = arrs2.indexOf(temp2);
    //console.log(`${temp2._id} : ${temp2.definition}`);
    arrs3.push({ _id: temp2._id, definition: temp2.definition }); //error here- the def has the same id as the word this needs to be fixed
    arrs2.splice(temp3, 1);
    //console.log(arrs3);
    //console.log(`Loop2: ${temp}, ${arrs3[1]._id}`);
  }

  return (
    <div>
      <Grid container spacing={2}>
        {arrs.map((ar, i) => (
          <Fragment key={`word${ar._id}`}>
            <Grid item xs={6}>
              <Button fullWidth onClick={() => checkId(ar._id)}>
                {console.log(ar._id)}
                <SimpleCard item={items[i].word}></SimpleCard>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth onClick={() => checkId(arrs3[i]._id)}>
                {console.log(arrs3[i]._id)}
                <SimpleCard item={arrs3[i].definition}></SimpleCard>
              </Button>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Match;

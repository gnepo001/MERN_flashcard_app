import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";

import { SimpleCard } from "../index.js";
import useStyles from "./styles";

const Match = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.posts);
  return (
    <div>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Fragment key={item._id}>
            <Grid item xs={6}>
              <Button fullWidth>
                <SimpleCard item={item.word}></SimpleCard>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth>
                <SimpleCard item={item.definition}></SimpleCard>
              </Button>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Match;

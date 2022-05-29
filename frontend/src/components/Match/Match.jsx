import React, { Fragment, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";

import { SimpleCard } from "../index.js";
import useStyles from "./styles";
import "./styles.css";

const Match = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.posts);

  const [selected, setSelected] = useState(null);
  const [randomArr, setRandomArr] = useState([]);
  const newList = useRef([]);

  const shuffleArray = (array) => {
    let _array = [...array];
    for (let i = _array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
  };

  useEffect(() => {
    const _newList = items.map((item) => ({ ...item, matched: false }));
    newList.current = _newList;
    setRandomArr(shuffleArray(_newList.keys()));
  }, [items]);

  const checkId = (item, type) => {
    console.log({ selected, item });
    if (selected) {
      if (item._id === selected._id && selected.type !== type) {
        item.matched = true;
      } else {
        console.log("no match");
      }
      setSelected(null);
      console.log("reset");
    } else {
      setSelected({ _id: item._id, type });
      console.log("set X");
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {!!randomArr.length &&
          newList.current.map((item, i, random) => {
            const index = randomArr[i];
            return (
              <Fragment key={`word${item._id}`}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    {...(!item.matched && {
                      onClick: () => checkId(item, "word"),
                    })}
                    className={`${item.matched && "matched"} ${
                      selected?.type === "word" &&
                      selected?._id === item._id &&
                      "selected"
                    }`}
                  >
                    {/*<SimpleCard item={item.word}></SimpleCard>*/}
                    {item.word}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    {...(!random[index].matched && {
                      onClick: () => checkId(random[index], "definition"),
                    })}
                    className={`${random[index].matched && "matched"} ${
                      selected?.type === "definition" &&
                      selected?._id === random[index]._id &&
                      "selected"
                    }`}
                  >
                    {/*<SimpleCard item={random[index].definition}></SimpleCard>*/}
                    {random[index].definition}
                  </Button>
                </Grid>
              </Fragment>
            );
          })}
      </Grid>
    </div>
  );
};

export default Match;

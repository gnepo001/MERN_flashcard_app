import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  flippableCards: {
    ["@media (min-width:500px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },
}));

import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    padding: "10px",
  },
  paper: {
    margin: "auto",
    width: "40%",
    ["@media (max-width:500px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },
  title: {
    margin: "auto",
  },
  input: {
    width: "80%",
    margin: "auto",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    marginTop: "10px",
  },
}));

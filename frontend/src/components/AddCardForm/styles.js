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
    width: "100%",
    "@media (max-width:500px)": {
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

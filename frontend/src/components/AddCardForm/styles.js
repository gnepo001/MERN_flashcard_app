import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  addForm_paper: {
    margin: "auto",
    width: "100%",
    "@media (max-width:500px)": {
      display: "none",
    },
  },
  addForm_form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    padding: "10px",
  },
  addForm_title: {
    margin: "auto",
  },
  addForm_input: {
    width: "80%",
    margin: "auto",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
  },
  addForm_buttons: {
    marginTop: "10px",
  },
}));

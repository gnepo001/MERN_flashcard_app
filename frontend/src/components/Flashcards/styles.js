import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  flashcards_Loading: {
    marginTop: "100px",
    width: "10%",
    margin: "auto",
    textAlign: "center",
  },
  flashcards_FlashcardContainer: {
    marginTop: "25px",
    "@media (max-width:500px)": {
      // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },
}));

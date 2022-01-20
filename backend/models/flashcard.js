// Flash card blue print for model
import mongoose from "mongoose";

const flashcardSchema = mongoose.Schema({
  word: String,
  definition: String,
});

const flashcard = mongoose.model("flashcard", flashcardSchema);

export default flashcard;

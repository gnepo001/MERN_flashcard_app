import mongoose from "mongoose";
import flashcard from "../models/flashcard.js";

//write new Flashcard to database
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new flashcard(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//fetch flashcards from database
export const getPosts = async (req, res) => {
  try {
    const postMessages = await flashcard.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  await flashcard.findByIdAndRemove(_id);
  res.json({ message: "Post deleted successfully" });
};

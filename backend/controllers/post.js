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

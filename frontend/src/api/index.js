import axios from "axios";

//backend connection
const url = "http://localhost:5010/posts";
export const createPost = (newPost) => axios.post(url, newPost);

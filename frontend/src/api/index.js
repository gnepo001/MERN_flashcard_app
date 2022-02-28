import axios from "axios";

//backend connection
const url = "http://localhost:5010/posts";
export const createPost = (newPost) => axios.post(url, newPost);
export const fetchPosts = () => axios.get(url);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  // res.send("List of posts");
  try {
    console.log("Fetching posts from database");
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  res.send("Update a post");
  //   const { id } = req.params;
};

export const deletePost = (req, res) => {
  res.send("Delete a post");
};

export const likePost = (req, res) => {
  res.send("Like a post");
};

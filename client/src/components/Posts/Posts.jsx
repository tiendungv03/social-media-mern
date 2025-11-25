// src/components/Posts/Posts.jsx
import { useState, useEffect } from "react";
import * as api from "../../services/api";
import PostItem from "./PostItem";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const response = await api.fetchPosts();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="w-full mx-auto mt-6">
      <h2 className="ml-2.5 text-xl font-semibold mb-4 text-slate-800">
        Posts
      </h2>

      {/* grid: 1 col mobile → 5 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {posts.map((item) => (
          <PostItem key={item._id || item.id} post={item} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

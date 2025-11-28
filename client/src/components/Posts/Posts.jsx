// src/components/Posts/Posts.jsx
import { useState, useEffect } from "react";
import * as api from "../../services/api";
import PostItem from "./PostItem";
import Post from "./Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  const fetchAllPosts = async () => {
    try {
      const response = await api.fetchPosts();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleToggleCreate = () => {
    setShowCreate((prev) => !prev);
  };

  const handlePostCreated = () => {
    setShowCreate(false);
    fetchAllPosts();
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="w-full mx-auto mt-6">
      {/* header + nút tạo */}
      <div className="flex items-center justify-between mb-4 px-1">
        {/* <h2 className="text-xl font-semibold text-slate-800">Posts</h2> */}
        <button
          type="button"
          onClick={handleToggleCreate}
          className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 
                     text-white text-sm font-medium transition-colors"
        >
          {showCreate ? "Close" : "Create Post"}
        </button>
      </div>

      {/* form tạo post */}
      {showCreate && (
        <div className="mb-6">
          {/* nhớ cho Post nhận prop onCreated nếu muốn reload list */}
          <Post onCreated={handlePostCreated} />
        </div>
      )}

      <h2 className="ml-2.5 text-xl font-semibold mb-4 text-slate-800">
        Posts
      </h2>

      {/* grid: 1 col mobile → 5 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {posts.map((item) => (
          <PostItem key={item._id || item.id} post={item} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

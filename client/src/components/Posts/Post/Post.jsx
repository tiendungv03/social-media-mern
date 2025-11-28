// src/components/Posts/Post/Post.jsx
import { useState } from "react";
import * as api from "../../../services/api";

const Post = ({ onCreated }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    creator: "",
    tags: "",
    selectedFile: "",
  });

  const handleChange = (field) => (e) => {
    setPostData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...postData,
        tags: postData.tags
          ? postData.tags.split(",").map((t) => t.trim())
          : [],
      };

      const response = await api.createPost(payload);
      console.log("Post created:", response.data);
      onCreated && onCreated();

      setPostData({
        title: "",
        message: "",
        creator: "",
        tags: "",
        selectedFile: "",
      });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 px-4">
      {/* page heading */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900">Create Memory</h1>
        <p className="text-sm text-slate-500 mt-1">
          Save your favorite moments with a title, story, tags and an image.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md border border-slate-200 p-5 space-y-4"
      >
        {/* section title */}
        <div>
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
            Basic Info
          </h2>
          <p className="text-xs text-slate-400">
            Tell a short story about this memory.
          </p>
        </div>

        {/* title */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-600">
            Title
          </label>
          <input
            type="text"
            placeholder="A day at the beach"
            value={postData.title}
            onChange={handleChange("title")}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                       placeholder:text-slate-400"
          />
        </div>

        {/* message */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-600">
            Story
          </label>
          <textarea
            placeholder="What happened? What do you want to remember?"
            value={postData.message}
            onChange={handleChange("message")}
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                       resize-none placeholder:text-slate-400"
          />
        </div>

        {/* creator + tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Creator
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={postData.creator}
              onChange={handleChange("creator")}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                         placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Tags
            </label>
            <input
              type="text"
              placeholder="travel, family, summer..."
              value={postData.tags}
              onChange={handleChange("tags")}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                         placeholder:text-slate-400"
            />
            <p className="text-[10px] text-slate-400">
              Separate tags with commas.
            </p>
          </div>
        </div>

        {/* image */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-600">
            Image URL
          </label>
          <input
            type="text"
            placeholder="https://example.com/photo.jpg"
            value={postData.selectedFile}
            onChange={handleChange("selectedFile")}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                       placeholder:text-slate-400"
          />
          <p className="text-[10px] text-slate-400">
            Later có thể đổi sang upload file thực.
          </p>
        </div>

        {/* actions */}
        <div className="pt-2 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() =>
              setPostData({
                title: "",
                message: "",
                creator: "",
                tags: "",
                selectedFile: "",
              })
            }
            className="px-3 py-1.5 rounded-lg text-xs font-medium
                       border border-slate-300 text-slate-600
                       hover:bg-slate-50 transition-colors"
          >
            Clear
          </button>

          <button
            type="submit"
            className="px-4 py-1.5 rounded-lg text-sm font-medium
                       bg-emerald-500 text-white
                       hover:bg-emerald-600 active:bg-emerald-700
                       transition-colors"
          >
            Save Memory
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;

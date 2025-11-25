const PostItem = ({ post }) => {
  const imageSrc =
    post.selectedFile ||
    "https://via.placeholder.com/300x180.png?text=No+Image";

  return (
    <div className="m-3.5 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      {/* image */}
      <div className="w-full h-40 bg-slate-100 overflow-hidden">
        <img
          src={imageSrc}
          alt={post.title || "Post image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* content */}
      <div className="p-3 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-slate-900 truncate">
              {post.title || "Untitled"}
            </h3>
            <p className="mt-1 text-xs text-slate-600 line-clamp-3">
              {post.message}
            </p>
          </div>
          <span className="ml-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
            {post.creator || "Unknown"}
          </span>
        </div>

        {/* tags + likes */}
        <div className="mt-3 flex items-center justify-between gap-2 text-[11px] text-slate-500">
          <div className="flex flex-wrap gap-1 max-w-[70%]">
            {Array.isArray(post.tags) &&
              post.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-[2px] rounded-full bg-slate-100 text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            {Array.isArray(post.tags) && post.tags.length > 3 && (
              <span className="text-slate-400">+{post.tags.length - 3}</span>
            )}
          </div>

          <div className="flex items-center gap-1 text-amber-600">
            <span>❤️</span>
            <span className="font-medium">{post.likeCount ?? 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;

import { formatDate } from "../utils/helpers";

const PostCard = ({ post, onOpen }) => {
  return (
    <article
      className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition"
      aria-labelledby={`post-title-${post.id}`}
    >
      <div
        className="h-40 sm:h-44 bg-center bg-cover"
        style={{ backgroundImage: `url(${post.cover})` }}
      />
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-500 dark:text-slate-400">{post.author}</div>
            <div className="text-xs text-slate-400">•</div>
            <div className="text-sm text-slate-400">{formatDate(post.date)}</div>
          </div>
          <div className="text-sm text-slate-500">{post.readTime} min</div>
        </div>

        <h3 id={`post-title-${post.id}`} className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          {post.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpen(post)}
              className="text-sm font-medium text-indigo-600 hover:underline"
              aria-label={`Read ${post.title}`}
            >
              Read
            </button>
            <div className="text-sm text-slate-500">{post.likes} ♥</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
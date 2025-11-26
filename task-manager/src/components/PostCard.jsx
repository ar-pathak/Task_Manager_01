// PostCard.jsx
const PostCard = ({ post }) => {
  const {
    title,
    excerpt,
    category,
    author,
    date,
    readTime,
    coverImage,
  } = post;

  return (
    <article
      className="
        group flex flex-col overflow-hidden rounded-2xl border
        border-slate-200 bg-white shadow-sm transition
        hover:-translate-y-1 hover:shadow-lg
        dark:border-slate-700 dark:bg-slate-900
      "
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="
            h-full w-full object-cover
            transition duration-500 group-hover:scale-105
          "
        />
        {/* Category badge */}
        {category && (
          <span
            className="
              absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1
              text-xs font-medium uppercase tracking-wide text-white
              backdrop-blur
            "
          >
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{readTime} min read</span>
        </div>

        {/* Title */}
        <h2
          className="
            line-clamp-2 text-lg font-semibold leading-snug
            text-slate-900 group-hover:text-indigo-600
            dark:text-slate-50 dark:group-hover:text-indigo-400
            transition-colors
          "
        >
          {title}
        </h2>

        {/* Excerpt */}
        <p
          className="
            line-clamp-3 text-sm text-slate-600
            dark:text-slate-300
          "
        >
          {excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-2">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div
              className="
                flex h-9 w-9 items-center justify-center rounded-full
                bg-indigo-100 text-sm font-semibold text-indigo-700
                dark:bg-indigo-900/40 dark:text-indigo-300
              "
            >
              {author?.name?.[0] || "A"}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                {author?.name || "Unknown Author"}
              </span>
              {author?.role && (
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {author.role}
                </span>
              )}
            </div>
          </div>

          {/* Read more */}
          <button
            className="
              inline-flex items-center gap-1 rounded-full px-3 py-1
              text-xs font-medium text-indigo-600 ring-1 ring-indigo-100
              transition group-hover:bg-indigo-50
              dark:text-indigo-300 dark:ring-indigo-900/60
              dark:group-hover:bg-indigo-900/30
            "
          >
            Read more
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;

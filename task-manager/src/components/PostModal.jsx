import { useEffect } from "react";

const PostModal = ({ post, onClose }) => {
    useEffect(() => {
        const onEsc = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onEsc);
        return () => document.removeEventListener("keydown", onEsc);
    }, [onClose]);

    if (!post) return null;

    return (
        <div className="fixed inset-0 z-50 grid place-items-center">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden
            />
            <div
                role="dialog"
                aria-modal="true"
                className="relative max-w-3xl w-full max-h-[90vh] overflow-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800"
            >
                <div className="relative">
                    <img src={post.cover} alt="" className="w-full h-56 object-cover rounded-t-2xl" />
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 bg-white/80 dark:bg-slate-800/60 rounded-full p-2 shadow hover:scale-105 transition"
                        aria-label="Close article"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                            {post.author} · {formatDate(post.date)} · {post.readTime} min
                        </div>
                        <div className="text-sm text-slate-500">{post.likes} likes</div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        {post.title}
                    </h2>

                    <div className="prose prose-slate dark:prose-inverted max-w-none">
                        <p>{post.content}</p>
                        <p>
                            This modal supports long content and will scroll independently from the page. Replace with your article HTML/MD-rendered content.
                        </p>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                            👍 Like
                        </button>
                        <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm">
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PostModal;
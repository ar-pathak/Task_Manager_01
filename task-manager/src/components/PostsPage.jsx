import React, { useEffect, useMemo, useState } from "react";
import PostCard from "./PostCard";
import { DUMMY_POSTS } from "../utils/DUMMY_POSTS";

const PostsPage = () => {
    // UI state
    const [query, setQuery] = useState("");
    const [activeTag, setActiveTag] = useState("");
    const [sort, setSort] = useState("newest"); // 'newest' | 'oldest' | 'popular'
    const [page, setPage] = useState(1);
    const [perPage] = useState(9);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    // Simulate fetch
    useEffect(() => {
        setLoading(true);
        const t = setTimeout(() => {
            setPosts(DUMMY_POSTS);
            setLoading(false);
        }, 450);
        return () => clearTimeout(t);
    }, []);

    // Derived tag list
    const tags = useMemo(() => {
        const s = new Set();
        posts.forEach((p) => p.tags.forEach((t) => s.add(t)));
        return Array.from(s);
    }, [posts]);

    // Filter + sort
    const filtered = useMemo(() => {
        let list = posts.slice();

        // search
        if (query.trim()) {
            const q = query.trim().toLowerCase();
            list = list.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.excerpt.toLowerCase().includes(q) ||
                    p.content.toLowerCase().includes(q) ||
                    p.author.toLowerCase().includes(q)
            );
        }

        // tag
        if (activeTag) {
            list = list.filter((p) => p.tags.includes(activeTag));
        }

        // sort
        if (sort === "newest") {
            list.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sort === "oldest") {
            list.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sort === "popular") {
            list.sort((a, b) => b.likes - a.likes);
        }

        return list;
    }, [posts, query, activeTag, sort]);

    // Pagination
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    useEffect(() => {
        if (page > totalPages) setPage(1);
    }, [totalPages, page]);

    const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

    return (
        <main className="min-h-screen py-12 px-4 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Articles</h1>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Latest tutorials, case studies and design deep-dives.
                        </p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="relative">
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setPage(1);
                                }}
                                placeholder="Search posts, authors, tags..."
                                className="w-64 md:w-80 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                                aria-label="Search posts"
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery("")}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    aria-label="Clear search"
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm outline-none"
                            aria-label="Sort posts"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="popular">Most popular</option>
                        </select>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <button
                        onClick={() => {
                            setActiveTag("");
                            setPage(1);
                        }}
                        className={`px-3 py-1 rounded-full text-sm border ${!activeTag
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                            }`}
                    >
                        All
                    </button>

                    {tags.map((t) => (
                        <button
                            key={t}
                            onClick={() => {
                                setActiveTag(t === activeTag ? "" : t);
                                setPage(1);
                            }}
                            className={`px-3 py-1 rounded-full text-sm border ${activeTag === t
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: perPage }).map((_, i) => (
                            <div key={i} className="animate-pulse bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
                                <div className="h-36 bg-slate-200 dark:bg-slate-800 rounded-md mb-4" />
                                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-2" />
                                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/2 mb-3" />
                                <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
                            </div>
                        ))}
                    </div>
                ) : pageItems.length === 0 ? (
                    <div className="py-20 text-center">
                        <h3 className="text-xl font-medium text-slate-800 dark:text-white">No posts found</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            Try adjusting your search, filters, or sort options.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pageItems.map((p) => (
                                <PostCard key={p.id} post={p} onOpen={(post) => setSelectedPost(post)} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex items-center justify-between">
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                Showing {(page - 1) * perPage + 1} - {Math.min(page * perPage, total)} of {total} posts
                            </div>

                            <nav className="flex items-center gap-2">
                                <button
                                    onClick={() => setPage((s) => Math.max(1, s - 1))}
                                    disabled={page === 1}
                                    className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm disabled:opacity-50"
                                >
                                    Prev
                                </button>

                                <div className="hidden sm:flex items-center gap-2">
                                    {Array.from({ length: totalPages }).map((_, i) => {
                                        const num = i + 1;
                                        // Limit visible page buttons
                                        if (totalPages > 7) {
                                            if (num === 2 && page > 4) return <span key={num} className="px-2">...</span>;
                                            if (num === totalPages - 1 && page < totalPages - 3) return <span key={num} className="px-2">...</span>;
                                            // show first, last, and window around current page
                                            if (![1, totalPages, page - 1, page, page + 1].includes(num) && !(num <= 3 && page <= 4) && !(num >= totalPages - 2 && page >= totalPages - 3)) return null;
                                        }
                                        return (
                                            <button
                                                key={num}
                                                onClick={() => setPage(num)}
                                                className={`px-3 py-2 rounded-lg border text-sm ${num === page ? "bg-indigo-600 text-white border-indigo-600" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"}`}
                                            >
                                                {num}
                                            </button>
                                        );
                                    })}
                                </div>

                                <button
                                    onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
                                    disabled={page === totalPages}
                                    className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </nav>
                        </div>
                    </>
                )}
            </div>

            {/* Modal */}
            {selectedPost && (
                <PostModal
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </main>
    );
};

export default PostsPage;

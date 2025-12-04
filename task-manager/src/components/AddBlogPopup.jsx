import React from "react";

const AddBlogPopup = ({ setIsOpen }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Popup Box */}
            <div className="
                relative w-full max-w-lg bg-white dark:bg-slate-900 
                shadow-2xl rounded-2xl p-8 border border-gray-200 
                dark:border-gray-700 animate-pop
            ">
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                    Add Blog
                </h2>

                <form className="space-y-6">
                    {/* Title */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            className="
                                px-4 py-2 rounded-lg border border-gray-300 
                                dark:border-gray-600 dark:bg-slate-800 
                                dark:text-white outline-none
                                focus:ring-2 focus:ring-indigo-500 
                                transition-all duration-200
                            "
                            placeholder="Enter blog title"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                            Content
                        </label>
                        <textarea
                            name="content"
                            rows={6}
                            className="
                                px-4 py-2 rounded-lg border border-gray-300 
                                dark:border-gray-600 dark:bg-slate-800 
                                dark:text-white outline-none
                                focus:ring-2 focus:ring-indigo-500 
                                transition-all duration-200
                            "
                            placeholder="Write your blog content here..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="
                            w-full bg-indigo-600 hover:bg-indigo-700 
                            text-white font-semibold py-2.5 rounded-lg 
                            shadow-md transition-all duration-200
                        "
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Popup Animation */}
            <style>
                {`
                @keyframes pop {
                    0% { transform: scale(0.8); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .animate-pop {
                    animation: pop 0.25s ease-out forwards;
                }
                `}
            </style>
        </div>
    );
};

export default AddBlogPopup;

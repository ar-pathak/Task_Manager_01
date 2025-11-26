import PostList from "./PostList"

const PostContainer = () => {

    const onAddPost = () => {
        alert("Add Post Clicked!")
    }

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-10">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
                        Latest Articles
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Dive into fresh stories and guides.
                    </p>
                </div>

                <button
                    onClick={onAddPost}
                    className="
      inline-flex items-center gap-2 rounded-lg border border-indigo-300 
      px-4 py-2 text-sm font-medium text-indigo-600 
      transition hover:bg-indigo-50
      dark:border-indigo-600 dark:text-indigo-300 dark:hover:bg-slate-800
    "
                >
                    <span className="text-lg leading-none">＋</span>
                    Add Post
                </button>
            </div>


            <div><PostList /></div>
        </section>
    )
}

export default PostContainer
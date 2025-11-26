import PostList from "./PostList"

const PostContainer = ({ title = "All Tasks", description }) => {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-10">
            {title && (
                <header className="mb-8">
                    <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                        {title}
                    </h1>
                    {description && (
                        <p className="mt-1 max-w-xl text-sm text-slate-600 dark:text-slate-400">
                            {description}
                        </p>
                    )}
                </header>
            )}

            <div><PostList /></div>
        </section>
    )
}

export default PostContainer
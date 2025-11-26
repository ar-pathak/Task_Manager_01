// Navbar.jsx
const Navbar = () => {
    return (
        <nav className="border-b border-slate-200 bg-white/80 backdrop-blur dark:bg-slate-900/80">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    DevBlog
                </h1>

                {/* Menu */}
                <ul className="hidden gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 sm:flex">
                    <li className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
                        Home
                    </li>
                    <li className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
                        Posts
                    </li>
                    <li className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
                        Categories
                    </li>
                    <li className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
                        About
                    </li>
                </ul>

                {/* Button */}
                <button className="rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    Subscribe
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

import { createBrowserRouter } from "react-router"
import App from "./App.jsx"
import PostContainer from "./components/PostContainer.jsx"
import ContactPage from "./components/Contact.jsx"
import PostsPage from "./components/PostsPage.jsx"
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Error loading page</div>,
        children: [
            {
                index: true,
                element: <PostContainer />
            },
            {
                path: "about",
                element: <div>About Page</div>
            },
            {
                path: "posts",
                element: <PostsPage />
            }
            , {
                path: "contact",
                element: <ContactPage />
            }
        ]
    }
])

export default router
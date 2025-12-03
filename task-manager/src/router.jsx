import { createBrowserRouter } from "react-router"
import App from "./App.jsx"
import PostContainer from "./components/PostContainer.jsx"
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
                element: <div>posts Page</div>
            }
            , {
                path: "contact",
                element: <div>Contact Page</div>
            }
        ]
    }
])

export default router
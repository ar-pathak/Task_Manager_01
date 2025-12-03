import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import PostContainer from "./components/PostContainer"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 dark:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-6">
        <Outlet />

      </main>
    </div>
  )
}

export default App
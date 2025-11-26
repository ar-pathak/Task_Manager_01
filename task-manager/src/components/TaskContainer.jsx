import PostList from "./PostList"
import TaskHeader from "./TaskHeader"

const TaskContainer = () => {
    return (
        <div className="w-11/12 mx-auto mt-5 p-10 bg-gray-100 rounded-2xl">
            <TaskHeader />
            <PostList />
        </div>
    )
}

export default TaskContainer
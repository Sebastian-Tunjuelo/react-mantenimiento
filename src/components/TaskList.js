import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";
function TaskList({ done = false }) {
  //con esto traigo las tareas
  const { tasks, getTasks, loading } = useTasks();
  //cuando carge el componente vas a activar la funcion getTasks
  useEffect(() => {
    getTasks(done);
  }, [done]);
  function renderTasks() {
    if (loading) {
      return <p>loading...</p>;
    } else if (tasks.length === 0) {
      return <p>No tasks found</p>;
    } else {
      return (
        <div>
          {tasks.map((task) => (
            <div key={task.id}>
              <TaskCard task={task} key={task.id} />
            </div>
          ))}
        </div>
      );
    }
  }
  return <div>{renderTasks()}</div>;
}

export default TaskList;

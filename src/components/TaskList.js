import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

function TaskList() {
  //con esto traigo las tareas
  const { tasks, getTasks } = useTasks();
  //cuando carge el componente vas a activar la funcion getTasks
  useEffect(() => {
    getTasks();
  }, [getTasks]);
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.name}</h1>
          <p>{JSON.stringify(task.done)}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

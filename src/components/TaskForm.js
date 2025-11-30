import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { createTask, adding } = useTasks();
  const handleSumit = async (e) => {
    e.preventDefault();
    createTask(taskName);
    setTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="taskName"
          placeholder="Tarea"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />
        <button disabled={adding}>{adding ? "adding..." : "Add"}</button>
      </form>
    </div>
  );
}

export default TaskForm;

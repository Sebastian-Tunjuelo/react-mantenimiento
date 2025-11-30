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
    <div className="card card-body mb-2">
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="taskName"
          placeholder="Tarea"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          className="form-control mb-3"
        />
        <button disabled={adding} className="btn btn-primary btn-sm">
          {adding ? "adding..." : "Add"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

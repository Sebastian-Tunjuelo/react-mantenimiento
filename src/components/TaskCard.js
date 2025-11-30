import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useTasks();
  const handleDelete = () => {
    deleteTask(task.id);
  };
  const handleDone = () => {
    updateTask(task.id, { done: !task.done });
  };
  return (
    <div>
      <h1>{task.name}</h1>
      <p>{JSON.stringify(task.done)}</p>
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          handleDone();
        }}
      >
        Done
      </button>
    </div>
  );
}

export default TaskCard;

import { useState } from "react";
import { supabase } from "../supabase/client";

function TaskForm() {
  const [taskName, setTaskName] = useState("");

  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      //cuando te registras te generan automaticamente un user
      const user = supabase.auth.getUser();
      const result = await supabase.from("tasks").insert({
        name: taskName,
        userId: user.id,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="taskName"
          placeholder="papi goku"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TaskForm;

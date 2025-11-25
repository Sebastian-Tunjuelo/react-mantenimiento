import { useEffect } from "react";
import { supabase } from "../supabase/client";
//import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useTask } from "../context/TaskContext";
import TaskList from "../components/TaskList";

function Home() {
  const navigate = useNavigate();
  //const obj = useContext(TaskContext);
  const obj = useTask();
  console.log(obj);

  useEffect(() => {
    if (!supabase.auth.getUser()) {
      //todo esto de los navigate son para cuidar el flujo de la pagina
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      Home
      <button onClick={() => supabase.auth.signOut()}>logout</button>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
//import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
//lo que no se importa con corchetes son los componentes
import TaskList from "../components/TaskList";

function Home() {
  const navigate = useNavigate();
  const [showTaskDone, setshowTaskDone] = useState(false);
  //const obj = useContext(TaskContext);
  useEffect(() => {
    if (!supabase.auth.getUser()) {
      //todo esto de los navigate son para cuidar el flujo de la pagina
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="row pt-4">
      <div className="col-md-4 offset-md-4">
        {/*<button onClick={() => supabase.auth.signOut()}>logout</button>*/}
        <TaskForm />
        <header className="d-flex justify-content-between my-3">
          <span className="h5">
            {showTaskDone ? "Tasks done" : "Tasks to do"}
          </span>
          <button
            className="btn btn-dark btn-sm mb-1"
            onClick={() => setshowTaskDone(!showTaskDone)}
          >
            {showTaskDone ? "Show tasks to do" : "Show tasks done"}
          </button>
        </header>
        <TaskList done={showTaskDone} />
      </div>
    </div>
  );
}

export default Home;

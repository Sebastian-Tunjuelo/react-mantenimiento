import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const TaskContext = createContext();

//esto es para evitar tener que exportar estas lineas de codigo constante mente
//import { useContext } from "react";
//import { TaskContext } from "../context/TaskContext";
//queda solo esta
//import { useTask } from "../context/TaskContext";
export const useTasks = () => {
  const context = useContext(TaskContext);
  //tira un error en caso de que los componentes o tags no esten adentro del contexto
  if (!context)
    throw new Error("useTaks must be used within a taskContextProvider");
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [adding, setAdding] = useState(false);

  const getTasks = async (done = false) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error, data } = await supabase
      .from("tasks")
      .select()
      .eq("userId", user.id)
      .eq("done", done)
      .order("id", { ascending: true });
    if (error) throw error;
    setTasks(data);
  };

  const createTask = async (taskName) => {
    setAdding(true);
    try {
      //cuando te registras te generan automaticamente un user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error, data } = await supabase.from("tasks").insert({
        name: taskName,
        done: false,
        userId: user.id,
      });
      if (error) throw error;
      //... tasks es como decir traeme los arreglos que ya estan y luego ...data pide que se combinen
      setTasks([...tasks, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setAdding(false);
    }
  };
  return (
    //por este medio exporto las tareas
    <TaskContext.Provider value={{ tasks, getTasks, createTask, adding }}>
      {children}
    </TaskContext.Provider>
  );
};

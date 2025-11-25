import { Children, createContext, useContext } from "react";

export const TaskContext = createContext();

//esto es para evitar tener que exportar estas lineas de codigo constante mente
//import { useContext } from "react";
//import { TaskContext } from "../context/TaskContext";
//queda solo esta
//import { useTask } from "../context/TaskContext";
export const useTask = () => {
  const context = useContext(TaskContext);
  //tira un error en caso de que los componentes o tags no esten adentro del contexto
  if (!context)
    throw new Error("useTaks must be used within a taskContextProvider");
  return context;
};

export const TaskContextProvider = ({ children }) => {
  return (
    <TaskContext.Provider value={{ name: "hola mi vida" }}>
      {children}
    </TaskContext.Provider>
  );
};

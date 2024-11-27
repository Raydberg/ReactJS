import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la pieda del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la pieda del tiempo",
    done: false,
  },
];
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const  handleNewTodo = (event)=>{
      console.log(event)
   }
  return (
    <>
      <h1>Todo App : 10 <small>pendientes : 2</small> </h1>
      <hr />
      <div className="row">
        <div className="col-7">
         <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
         <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

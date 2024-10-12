import { TodoList } from "./TodoList";
import { useTodo } from "../../hooks/useTodo";

export const TodoApp = () => {
  const {onChangeForm,onInputValue,input,todos} = useTodo()

  return (
    <div className="flex flex-col items-center ">
      <form onSubmit={onChangeForm}>
        <input
          type="text"
          onChange={onInputValue}
          placeholder="Introduce el texto"
          value={input}
        />
      </form>
      {todos.map((item) => (
         <TodoList key={item} todo={item}/>
    ))}
    </div>
  );
};

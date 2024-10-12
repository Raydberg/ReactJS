import { useState } from "react";
export const useTodo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(["Batmam", "Superman"]);
  const onNewTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const onInputValue = ({ target }) => {
    setInput(target.value);
  };

  const onChangeForm = (event) => {
    event.preventDefault();
    onNewTodo(input);
    setInput("");
  };
  return {
    input,
    todos,
    onInputValue,
    onChangeForm,
  };
};

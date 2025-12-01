import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
      />
      <TodoList todos={todos} />
    </>
  );
};

export default App;

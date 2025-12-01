const TodoInput = ({ inputValue, setInputValue, addTodo }) => {
  return (
    <section>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Toevoegen</button>
    </section>
  );
};

export default TodoInput;

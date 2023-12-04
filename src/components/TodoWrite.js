export function TodoWrite({ newTodo, setNewTodo, addTodo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>add todo</button>
    </div>
  );
}

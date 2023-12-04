import React from "react";
import { atom, useAtom } from "jotai";
import { TodoWrite } from "@/components/todoWrite";

const todosAtom = atom([]);
const newAtom = atom("");

export default function Home() {
  const [todos, setTodos] = useAtom(todosAtom);
  const [newTodo, setNewTodo] = useAtom(newAtom);

  const addTodo = () => {
    if (newTodo.trim().length == 0) return;
    setTodos([...todos, newTodo.trim()]);
    setNewTodo("");
  };

  return (
    <div>
      <h1>TodoList</h1>
      <TodoWrite newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <div>{JSON.stringify(todos)}</div>
    </div>
  );
}

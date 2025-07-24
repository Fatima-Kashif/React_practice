import { useState } from "react";
import useTodo from "../context/todocontext";


export default function TodoInput() {
  const {addTask}=useTodo()
  const [todo,setTodo]=useState('')
  const add=()=>{
    addTask({id:Date.now(), todo, completed:false })
    setTodo('')
  }
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={todo}
        onChange={(e)=>{
          setTodo(e.target.value)
        }}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 rounded-full border bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />
      <button className="bg-purple-500 cursor-pointer hover:bg-purple-600 text-white px-5 py-3 rounded-full shadow-lg transition " onClick={add}>
        Add
      </button>
    </div>
  );
}

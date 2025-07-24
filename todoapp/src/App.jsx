import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./context/todocontext";




export default function TodoApp() {
const [tasks,setTasks]=useState([])

const addTask=(todo)=>{
  setTasks((prev)=>[{...todo},...prev])// we have to spread the to do object to store it in an array with its properties
}
// in this we are adding tasks that we are passing along with the previous todos that are currently stored in th state

const editTask=(id,todo)=>{
  setTasks((prev)=>  //if we add curly braces then it is neccessary to use return keyword if you not then it will return directly
    prev.map((edittodo)=>
      edittodo.id===id?todo:edittodo
    ))
}
// here we are passing ids and changing the text to what we are passing

const deleteTask=(id)=>{
   setTasks((prev)=>
    prev.filter((deletetodo)=>
      deletetodo.id!==id
    ))
  }

const complete=(id)=>{
  setTasks((prev)=>
    prev.map((prevtodo)=>
      prevtodo.id===id?{...prevtodo,completed:!prevtodo.completed}:prevtodo
    )
  )
}
// The { ...prevtodo } copies all properties of the task (like title, id etc.)
// Then completed: !prevtodo.completed overwrites the completed property:
// If it was true → becomes false
// If it was false → becomes true
// So it toggles completed.

// to save it in local storage we'll set and get in useEffect

useEffect(()=>{
const todoslist=JSON.parse(localStorage.getItem("todo")) //local storage always gets items in string so we have to parse it
//we'll check if they exist or not if it is null then our website will crash
if (todoslist && todoslist.length>0){
  //If null → your app would crash if you did todos.length without checking if it exists.
  setTasks(todoslist)// to make the local storage and tasks same
}
},[])

// we are making another useEffecgt because I don't want what I wikl do here it'll run as many time as the tasks list changes but I don't run the abobe functionality everytime so it will run only ehrn the componnet mounts 

useEffect(()=>{
  localStorage.setItem("todo",JSON.stringify(tasks)) //local storage sores every item in string
},[tasks])

  return (
    <TodoProvider value={{tasks,editTask,deleteTask,addTask,complete}}>
    <div className="min-h-screen bg-gradient-to-r from-[#42275a] to-[#734b6d] flex items-center justify-center p-4">
      <div className="scrollbar w-full max-h-[600px] max-w-md bg-gray-300 rounded-3xl shadow-2xl p-8 overflow-y-scroll ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Tasks
        </h1>
        <TodoInput />
        <ul className="mt-6 space-y-4">
        {tasks.map(task=>
          <TodoItem  key={task.id} task={task}/>
        )}
          </ul>
        
          
          {/* <TodoItem />
          <TodoItem /> */}
       
      </div>
    </div>
    </TodoProvider>
  );
}

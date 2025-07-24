import { createContext, useContext } from "react";
const TodoContext=createContext({
    tasks:[{
        todo:'',
        id:'',
        completed:false
    }],
    editTask:()=>{},
    deleteTask:()=>{},
    addTask:()=>{},
    complete:()=>{}
})

export const TodoProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext)
}



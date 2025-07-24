import { useState ,useRef} from "react";
import useTodo from "../context/todocontext";

export default function TodoItem({ task }) {
  // here we are sending todo in a prop because app.jsx is a parent element when it shows each TodoItem and when the edit button clicked of the paticular task it comes in TodoItem and calls the function
  const [isEditable, setIsEditable] = useState(false);
  const { editTask, deleteTask, complete } = useTodo();
  const [editMsg, setEditMsg] = useState(task.todo);
  const inputRef=useRef(null)
  const editTodo = () => {
  if (isEditable) {
    editTask(task.id, { ...task, todo: editMsg });
  }
  else{
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0);  
  }
  // what this is doing when edit button clicked if it is not true but it is clicked then it will be going to true but we cannot instantly focus the input because the isEditable variabled does not become true yet and readonly in input element is dependent on this variable so we have settimeout so it will run after the callstack becomes empty when the variable updates to true
  setIsEditable((prev) => !prev); // after doing the editing it will become opposite of it
};
  const completed = () => {
    complete(task.id);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={completed}
          disabled={task.completed}
          className="h-5 w-5 accent-purple-500 "
        />
        <input
          ref={inputRef}
          type="text"
          readOnly={!isEditable}
          value={editMsg}
          onChange={(e) => setEditMsg(e.target.value)}
          className="text-gray-800 w-full h-full outline-none"
        />
        {/* todo is the item that is coming as a prop and inside it todo is a property which has the content */}
      </div>
      <div className="flex gap-3">
        <button className="cursor-pointer">
          {!isEditable?<img
            className="h-[25px] w-[25px]"
            src="edit.svg"
            alt="edit"
            onClick={editTodo}
          />:<img
            className="h-[25px] w-[25px]"
            src="save.png"
            alt="save"
            onClick={editTodo}
          />}
          
        </button>
        <button className=" cursor-pointer">
          <img
            className="h-[35px] w-[35px]"
            src="delete.svg"
            alt="delete"
            onClick={() => deleteTask(task.id)}
          />
        </button>
      </div>
    </li>
  );
}

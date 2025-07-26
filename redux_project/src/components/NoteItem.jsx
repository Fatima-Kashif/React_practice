import { useDispatch } from "react-redux";
import {deletenote,toggleImp} from '../redux/slices/notesSlice'
export default function NoteItem({note}) { // we have to pass the note as a prop to tell which note is selected
const dispatch=useDispatch()
  return (
    note.note &&(
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
        <div className="flex gap-4"> 
          {note.category && <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">
          {note.category}
        </span>  }
        
          {note.important? <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">Important
        </span>:""}
  
        </div>
      </div>
      <p className="text-gray-700">{note.note}</p>
      <div className="flex justify-end gap-2">
        <button className="text-purple-600 hover:text-purple-800 transition" onClick={()=>dispatch(toggleImp(note.id))}>
          Important
        </button>
        <button className="text-red-500 hover:text-red-700 transition" onClick={()=>dispatch(deletenote(note.id))}>
          Delete
        </button>
      </div>
    </div>
    )
  );
}

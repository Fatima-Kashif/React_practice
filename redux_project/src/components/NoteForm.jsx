import { useState } from "react";
import { useDispatch } from 'react-redux';
import {addnote} from '../redux/slices/notesSlice'

export default function NoteForm() {
  const [note,setNote]=useState('')
  const [important,setImportant]=useState(false)
  const [category,setCategory]=useState('')
  const [title,setTitle]=useState('')
  const dispatch=useDispatch()
  const add=()=>{ //if we are handling it as an object in reducer then we should pass object with the properties by they are handled
    dispatch(addnote({note:note,important:important,category:category,title:title}))
    setNote('')
    setCategory('')
    setTitle('')
    setImportant(false)
  }
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-800">Add New Note</h2>
      <input
        type="text"
        placeholder="Note Title"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        required
      />
      <input
        type="text"
        placeholder="Your note..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={note}
        onChange={(e)=>{setNote(e.target.value)}}
        required
      />
      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" value={category} onChange={(e)=>setCategory(e.target.value)} required >
        <option value="" >Select Category</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="study">Study</option>
      </select>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="important" className="h-4 w-4" checked={important} onChange={(e)=>setImportant(e.target.checked)} />
        <label htmlFor="important" className="text-gray-700">
          Mark as Important
        </label>
      </div>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition" onClick={add}>
        Add Note
      </button>
    </div>
  );
}

import NoteForm from "./components/NoteForm";
import NoteItem from "./components/NoteItem";
import { useSelector } from "react-redux";

export default function App() {
  const notes=useSelector(state=>state.notes) // we have to pass a callback in it
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-700 flex flex-col items-center justify-start p-8 gap-8">
      <h1 className="text-4xl text-white font-bold">My Notes</h1>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <NoteForm />
        <div className="flex flex-col gap-4">
        {notes.map((note)=>(<NoteItem key={note.id} note={note}/>))}
    </div>
      </div>
    </div>
  );
}
// you can wrap a provider here or main.jsx
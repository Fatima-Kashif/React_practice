import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={notes:[{id:1,note:'',important:false,category:'',description:''}]}

// using only properties not values for iitial state is invalid
const notesSlice=createSlice({
    name:'notes',
    initialState,// there is capital S in it
    reducers:{
        addnote:(state,action)=>{
            const note={id:nanoid(),
                note:action.payload.note,
                important:action.payload.important, // if only note was sending from the input then it will be only action.payload but here two properties are coming note and important so it'll refer as action.payload.not and .important 
                category:action.payload.category,
                title:action.payload.title
                //payload is the data that coming in this reducer 

            }
        state.notes.push(note) // this is how I add additional notes in the current state
        },// state in which the current state of variable is stored
        deletenote:(state,action)=>{
            state.notes=state.notes.filter((note)=>note.id!==action.payload) //in payload I have directly send the id instead of an object which has property of id
        },//action in which the coming data is stored
        toggleImp:(state,action)=>{
            state.notes=state.notes.map((note)=>note.id===action.payload?{...note,important:!note.important}:note)
        }
    }
})
// Either you can define them all above and just give reference or you can define here directly

export const {addnote,deletenote,toggleImp}=notesSlice.actions

export default notesSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './slices/notesSlice'
const store=configureStore({
// we have to register reducer here otherwise the state will not update
reducer:notesReducer
})

export default store;
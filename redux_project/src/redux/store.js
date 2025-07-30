import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './slices/notesSlice'
import { persistReducer,persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'


const configpersist={
    key:'redux-persist',
    storage
}
const persistedreducer=persistReducer(configpersist,notesReducer)

const store=configureStore({
// we have to register reducer here otherwise the state will not update
reducer:persistedreducer
})
export const persistor=persistStore(store)
export default store;
import {configureStore} from "@reduxjs/toolkit";
import transhistoryReducer from "./Slices/transactionSlice";  //keep your slice name with lower case
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// implemeting redux persist
const configpersist={
    key:'persist-store',
    storage
}

const persistedReducer=persistReducer(configpersist,transhistoryReducer)
export const store=configureStore({
    // slices that we need to export (which need to be used by any component)
    reducer:persistedReducer,
    // middleware:(getDefaultMiddleware)=>{
        // getDefaultMiddleware({
        //     serializableCheck:{
        //         ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        //     }
        // })
    // }
})

export const persistor= persistStore(store)
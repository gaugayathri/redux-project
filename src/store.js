import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './Slices/taskSlice'
 export const store=configureStore({
    reducer:{
        tasks:taskReducer
    }
})
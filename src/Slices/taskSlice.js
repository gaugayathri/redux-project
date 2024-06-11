import { createSlice } from "@reduxjs/toolkit";


let initialState={
    taskList:[],
    selectTask:{}
}

const taskSlice=createSlice({
    name:'taskSlice',
    initialState,
    reducers:{
       addTaskToReducer:(state,action)=>{
         let id=Math.random()*100
         let task={...action.payload,id}
         state.taskList.push(task)
       },
       updateTaskInReducer:(state,action)=>{
            state.taskList=state.taskList.map((task)=> (task.id === action.payload.id) ? action.payload : task)
       },
       deleteTaskFromReducer:(state,action)=>{
          state.taskList=state.taskList.filter((task)=> task.id !== action.payload.id)
       },
       selectedTask:(state,action)=>{
          state.selectTask=action.payload
       }
    }
}
)
export const {addTaskToReducer,updateTaskInReducer,deleteTaskFromReducer,selectedTask}=taskSlice.actions
export default taskSlice.reducer
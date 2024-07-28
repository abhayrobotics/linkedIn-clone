import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const userSlice = createSlice({
    name:"user",
    initialState:{
        userName:null,
        email:null,
        errorMessage:null
    },
    reducers:{
        addUserName:(state,action)=>{
            state.userName =action.payload;
        },
        addUserEmail:(state,action)=>{
            state.email =action.payload;
        },
        addErrorMessage:(state,action)=>{
            state.errorMessage =action.payload;
        }
    }
})

export const {addUserName,addUserEmail,addErrorMessage} = userSlice.actions;
export default userSlice.reducer;
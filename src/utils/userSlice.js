import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:"user",
    initialState:{
        userName:"Mr Xaviours",
        email:null,
        errorMessage:null,
        imageURL:"https://avatars.githubusercontent.com/u/58120166?v=4",
        postOpen:true
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
        },
        togglePostShow:(state)=>{
            state.postOpen =!state.postOpen;
        }
    }
})

export const {addUserName,addUserEmail,addErrorMessage,togglePostShow} = userSlice.actions;
export default userSlice.reducer;
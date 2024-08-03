import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:"user",
    initialState:{
        userName:"My Account",
        email:null,
        errorMessage:null,
        imageURL:"https://avatars.githubusercontent.com/u/58120166?v=4",
        postOpen:false,
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
            console.log(state.postOpen)
            state.postOpen =!state.postOpen;
        }
    }
})

export const {addUserName,addUserEmail,addErrorMessage,togglePostShow} = userSlice.actions;
export default userSlice.reducer;
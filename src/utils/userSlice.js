import { createSlice } from "@reduxjs/toolkit";
import banner from "../assets/banner.png"


const userSlice = createSlice({
    name:"user",
    initialState:{
        userName:"My Account",
        email:null,
        imageURL:"https://avatars.githubusercontent.com/u/58120166?v=4",
        errorMessage:null,
        loggedIn:false,
        postOpen:false,
        pageLocation:"/feed",
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
            // console.log(state.postOpen)
            state.postOpen =!state.postOpen;
        },
        checkLoggedIn:(state,action)=>{
            console.log(state.loggedIn)
            state.loggedIn =action.payload;
        },
        updatePageLocation:(state,action)=>{
            state.pageLocation =action.payload;
        }
    }
})

export const {addUserName,addUserEmail,addErrorMessage,togglePostShow,checkLoggedIn,updatePageLocation} = userSlice.actions;
export default userSlice.reducer;
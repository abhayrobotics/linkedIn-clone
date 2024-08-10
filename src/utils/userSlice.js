import { createSlice } from "@reduxjs/toolkit";
import banner from "../assets/banner.png"
import photo from "../assets/photo.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
const userSlice = createSlice({
    name:"user",
    initialState:{
        userName:"My Account",
        email:null,
        imageURL:photo,
        errorMessage:null,
        loggedIn:false,
        postOpen:false,
        pageLocation:"/feed",
        messageStatus:false,
    },
    reducers:{
        addUserName:(state,action)=>{
            state.userName =action.payload;
        },
        addUserEmail:(state,action)=>{
            state.email =action.payload;
        },
        addUserphoto:(state,action)=>{
            state.imageURL =action.payload;
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
        },
        toggleMessageStatus:(state)=>{
            state.messageStatus =!state.messageStatus;
        }
    }
})

export const {addUserName,addUserEmail,addErrorMessage,togglePostShow,addUserphoto,checkLoggedIn,updatePageLocation,toggleMessageStatus} = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:'post',
    initialState:{
        allPosts: [],
    },
    reducers:{
        addPost:(state,action)=>{
            state.allPosts =action.payload;
        }
    }
})

export const {addPost} = postSlice.actions;

export default postSlice.reducer;
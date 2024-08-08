import  {configureStore} from "@reduxjs/toolkit"
import  userReducer  from "./userSlice";
import postReducer from "./postSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        post:postReducer,
    }
})

export default appStore;
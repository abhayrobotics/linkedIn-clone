import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ArticleIcon from "@mui/icons-material/Article";
import { togglePostShow } from "../utils/userSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import photo from "../assets/photo.jpg";

const NewPost = () => {
  const dispatch =useDispatch();
  // const imgURL = useSelector((store) => store.user.imageURL);
  const UserData1 = useAuthState(auth)[0];

  const handleOpenPost =()=>{
    dispatch(togglePostShow())
    
  }

  return (
    <div>
      <div className="m-1 p-3 mx-auto pb-0 w-[350px] xsm:w-[90%] sm:w-[600px]  border border-slate-300  bg-white  rounded-lg">
        <div className="flex">
          <img src={UserData1?.photoURL===null?photo:UserData1?.photoURL} className="w-12 rounded-full" />
          <button onClick={handleOpenPost} className="w-[100%] border border-slate-300 text-sm text-slate-600 font-semibold text-left hover:bg-feedColor py-2 px-6 rounded-full mx-2">
            Start a post, try writing with AI
          </button>
        </div>
        <div className="py-4 px-4 flex justify-between cursor-pointer">
          <div className="flex items-center cursor-pointer  rounded-lg  py-2 hover:bg-feedColor">
            <PermMediaIcon color="primary" />
            <p className="px-2 text-sm">Media</p>
          </div>
          <div className="flex items-center cursor-pointer  rounded-lg py-2 hover:bg-feedColor">
          <WhatshotIcon sx={{ color: "#ffa726"}} />
            <p className="px-2 text-sm">Job</p>

          </div>
          <div className="flex items-center cursor-pointer   rounded-lg  py-2 hover:bg-feedColor">
          <ArticleIcon sx={{ color: "#ef5350" }} />
          <p className="px-2 text-sm">Article</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;

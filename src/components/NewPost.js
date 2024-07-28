import React from "react";
import { useSelector } from "react-redux";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ArticleIcon from "@mui/icons-material/Article";

const NewPost = () => {
  const imgURL = useSelector((store) => store.user.imageURL);

  return (
    <div>
      <div className="m-1 p-2 pb-0 w-[500px] border border-slate-300  bg-white  rounded-lg">
        <div className="flex">
          <img src={imgURL} className="w-12 rounded-full" />
          <button className="w-[100%] border border-slate-300 text-sm text-slate-600 font-semibold text-left hover:bg-feedColor py-2 px-6 rounded-full mx-2">
            Start a post, try writing with AI
          </button>
        </div>
        <div className="py-4 px-4 flex justify-between cursor-pointer">
          <div className="flex items-center cursor-pointer  rounded-lg px-6 py-2 hover:bg-feedColor">
            <PermMediaIcon color="primary" />
            <p className="px-2 text-sm">Media</p>
          </div>
          <div className="flex items-center cursor-pointer  rounded-lg px-6 py-2 hover:bg-feedColor">
          <WhatshotIcon sx={{ color: "#ffa726"}} />
            <p className="px-2 text-sm">Contribute</p>

          </div>
          <div className="flex items-center cursor-pointer   rounded-lg px-6 py-2 hover:bg-feedColor">
          <ArticleIcon sx={{ color: "#ef5350" }} />
          <p className="px-2 text-sm">Article</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;

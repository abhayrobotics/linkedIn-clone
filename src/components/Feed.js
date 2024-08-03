import Header from "./Header";
import Profile from "./Profile";
import NewPost from "./NewPost";
import Post from "./Post";
import News from "./News";
import CreatePost from "./CreatePost";
import { useSelector } from "react-redux";
import app from "../utils/firebase";
// import {db} from "../utils/firebase"


const Feed = () => {
  
  const togglePostShow =useSelector(store=>store?.user?.postOpen)
  



  return (
    <div>
      {togglePostShow && <CreatePost />}
      <Header />
      <div className=" bg-feedColor flex justify-center py-6 " >
        <div className=" flex justify-center flex-wrap flex-col sm:flex-row  w-4/6 ">
          <Profile className="w-1/4"/>
          <div className="flex flex-col  ">
            <NewPost />
            <hr className="mx-1 my-2 border-1 border-slate-500"/>
            <Post />
          </div>
          <News className="w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default Feed;

import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { togglePostShow } from "../utils/userSlice";
import { collection, getDocs, addDoc,doc,setDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useRef } from "react";

const CreatePost = () => {
  const dispatch = useDispatch();
  const postText =useRef();
  const UserData = useSelector((store) => store.user);
  //   console.log(UserData.userName);
  
  //   linking thepost to firebase store
  
  const handlePost = async () => {
    console.log(postText.current.value);
    
    // close the post
        dispatch(togglePostShow());
   

    // add new  data to cloud
    try {
      const date1 = new Date();
      const docRef = await addDoc(collection(db, "Posts"), {
        post: postText.current.value,
        date: date1,
        username: UserData.userName,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

   
  };

  // close the post
  const handleClosePost = () => {
    dispatch(togglePostShow());
  };

  return (
    <div className="absolute w-svw bg-black bg-opacity-40  h-svh">
      <div className=" absolute left-1/2 -translate-x-1/2 my-10 w-[50svw] min-h-[500px] h-[60svh] border bg-white rounded-lg ">
        <div>
          {/* ******************************** User Name */}
          <div className="flex  justify-between p-4  ">
            <div className="flex">
              <img src={UserData?.imageURL} className="w-12 rounded-full" />
              <div className="px-2 py-2 text-lg font-semibold">
                {UserData.userName}
              </div>
            </div>
            <CloseIcon
              onClick={handleClosePost}
              className=" cursor-pointer hover:bg-slate-300 p-0.5 rounded-full"
            />
          </div>
          {/* ************************* Post content */}
          <div>
            <textarea
              ref={postText} className="p-2 w-full h-[48svh] border-none outline-none resize-none px-3 py-3 text-lg"
              type="text"
              placeholder="What do you want to post ?"
            />
          </div>
          <hr className="my-2" />
          <div className="flex justify-end  mx-3 " onClick={handlePost}>
            <button className="bg-mainColor px-5 py-1 rounded-2xl text-white text-md font-semibold">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

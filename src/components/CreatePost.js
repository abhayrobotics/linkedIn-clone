import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { togglePostShow } from "../utils/userSlice";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase";
import { useEffect, useRef, useState } from "react";
import { PreviousPost } from "./Feed";
import { useAuthState } from "react-firebase-hooks/auth";
import photo from "../assets/photo.jpg";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { model } from "../utils/geminiai";

const CreatePost = () => {
  const dispatch = useDispatch();
  // const postText = useRef();
  let [postText,setPostText ]= useState("");
  const [imageP, setImageP] = useState("");
  const [imagePostURL, setImagePosturl] = useState("");

  // const UserData = useSelector((store) => store.user);
  const UserData1 = useAuthState(auth)[0];
  // console.log(UserData1);

  useEffect(() => {
    // console.log('imagePostURL:', imagePostURL);
  }, [imagePostURL]);
  //   linking thepost to firebase store

  const geminiAi = async ()=>{
    console.log(postText)
    const prompt =`Acting as a Linkedin Expert. Improve the  LinkedIn post written as :" `+postText+`" and give only one improved result  inside ";" Example:
 ";Thrilled to announce I've joined Google as a Software Engineer! 🎉;" `
 
    const result = await model.generateContent(prompt);
    const reponse =  result.response;
    const text = reponse.text().split(";")[1];
    // console.log(text);
    setPostText(text)
  
  }

  const handlePost = async () => {
    // console.log(postText.current.value, serverTimestamp());

    // close the post
    dispatch(togglePostShow());

    // add new  data to cloud
    try {
      // const postImgName = imageP.name;
      // const postImgRef = ref(storage, postImgName);
      // // uploading
      //  uploadBytes(postImgRef, imageP)
      //   .then(() => {
      //     console.log("image uploaded");
      //   })
      //   .then(() => {
      //     // downloading
      //     getDownloadURL(postImgRef).then((url) => {
      //       // console.log(url);
      //       setImagePosturl(url);
      //     });
      //   })


      // const date1 = new Date();
      const docRef = await addDoc(collection(db, "Posts"), {
        post: postText,
        postImg: imagePostURL,
        date: serverTimestamp(),
        username: UserData1?.displayName,
        uid: UserData1?.uid,
        photoURL: UserData1?.photoURL,
        likeCount: 0,
        likeFlag: false,
        Comment: [],
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // close the post
  const handleClosePost = () => {
    dispatch(togglePostShow());
  };

  return (
    <div className="absolute w-svw bg-black bg-opacity-40 z-30 h-svh">
      <div className=" absolute left-1/2 -translate-x-1/2 my-10 w-[90%] md:w-[50svw] min-h-[500px] h-[60svh] border bg-white rounded-lg ">
        <div>
          {/* ******************************** User Name */}
          <div className="flex  justify-between p-4  ">
            <div className="flex">
              <img
                src={UserData1?.photoURL === null ? photo : UserData1?.photoURL}
                className="w-12 rounded-full"
              />
              <div className="px-2 py-2 text-lg font-semibold">
                {UserData1?.displayName}
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
              value={postText} onChange={(e) =>setPostText(e.target.value)}
              className="p-2 w-full min-h-[48svh] border-none outline-none resize-none px-3 py-3 text-lg"
              type="text"
              placeholder="What do you want to post ?"
            />
            {/* <input type="file" onChange={(e) => setImageP(e.target.files[0])} /> */}
          </div>
          <hr className="my-2" />
          <div className="flex flex-wrap justify-between  mx-3 ">
            <button className="bg-red-500 px-5 py-1 rounded-2xl text-white text-md font-semibold" onClick={geminiAi}>
              Improvise with AI ✨
            </button>
            <button className="bg-mainColor px-5 py-1 rounded-2xl text-white text-md font-semibold"  onClick={handlePost}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

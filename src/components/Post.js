import { useSelector } from "react-redux";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { db } from "../utils/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const Post = ({ postData }) => {
  const [id, post, username, date, likeCount, likeFlag] = postData;
  const UserData = useSelector((store) => store.user);
  console.log(post);

  const handleLike = async () => {
    // handle like of a post
    // const oldLikeCount =
    await updateDoc(doc(db, "Posts", id), {
      likeCount: likeCount + likeFlag?1:0,
      likeFlag: !likeFlag,
    });
  };
  // console.table(likeCount,likeFlag)

  return (
    <div className="m-1 p-2 pb-0 w-[500px] border border-slate-300  bg-white  rounded-lg ">
      {/* ****************************** User Details */}
      <div className="flex justify-between">
        <div className="flex">
          <img src={UserData?.imageURL} className="w-12 rounded-full" />
          <div>
            <div className="px-2 text-sm font-semibold">{username}</div>
            <div className="px-2 text-xs text-slate-500">
              {" "}
              Frontend Developer | React | JavaScript | Learning DSA
            </div>
          </div>
        </div>
        <CloseIcon sx={{ color: "slategray", fontSize: 20 }} className="" />
      </div>

      {/* ***********************************Post */}
      <div className="text-sm py-2">{post}</div>
      {/* *****************************Like comment share */}
      <hr className="my-2" />
      <div className="pb-4 px-4 flex justify-between cursor-pointer">
        <div className="flex items-center cursor-pointer  rounded-lg px-6 py-2 hover:bg-feedColor">
          {likeFlag ? (
            <ThumbUpIcon color="primary" />
          ) : (
            <ThumbUpOffAltIcon color="primary" />
          )}
          <p className="px-2 text-sm" onClick={handleLike}>
            Like
          </p>
        </div>
        <div className="flex items-center cursor-pointer  rounded-lg px-6 py-2 hover:bg-feedColor">
          <ChatIcon sx={{ color: "slategray" }} />
          <p className="px-2 text-sm">Comment</p>
        </div>
        <div className="flex items-center cursor-pointer   rounded-lg px-6 py-2 hover:bg-feedColor">
          <SendIcon color="primary" />
          <p className="px-2 text-sm">Send</p>
        </div>
      </div>
    </div>
  );
};

export default Post;

import { useSelector } from "react-redux";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Post = () => {
  const UserData = useSelector((store) => store.user);

  return (
    <div className="m-1 p-2 pb-0 w-[500px] border border-slate-300  bg-white  rounded-lg">
      {/* ****************************** User Details */}
      <div className="flex justify-between">

        <div className="flex">
          <img src={UserData?.imageURL} className="w-12 rounded-full" />
          <div>
            <div className="px-2 text-sm font-semibold">{UserData.userName}</div>
            <div className="px-2 text-xs text-slate-500"> Frontend Developer | React | JavaScript | Learning DSA</div>
          </div>
        </div>
        <CloseIcon sx={{ color: "slategray",fontSize:20 }} className="" />
      </div>
      
      {/* ***********************************Post */}
<div className="text-sm py-2">As you know that consistency is most difficult thing in completing DSA. And we make sure that everyone finish DSA with javascript course as a challenging mission in next 35 days. Course starts from 2nd August and we will soon stop admission just like last batch. Course is in Hindi and covers DSA, leetcode, machine coding, behaviour round, and bits of system design too. If you are interested use code YOUTUBE10 and get 10% discount.
</div>
      {/* *****************************Like comment share */}
      <hr className="my-2"/>
      <div className="pb-4 px-4 flex justify-between cursor-pointer">
      <div className="flex items-center cursor-pointer  rounded-lg px-6 py-2 hover:bg-feedColor">
            <ThumbUpOffAltIcon color="primary" />
            <p className="px-2 text-sm">Like</p>
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

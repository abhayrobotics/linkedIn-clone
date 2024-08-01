import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const UserData = useSelector((store) => store.user);
  console.log(UserData.userName);

    const handlePost =()=>{
        
    }

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
                 <CloseIcon />
            </div>
            {/* ************************* Post content */}
            <div>
                <textarea className="p-2 w-full h-[50svh] border-none outline-none resize-none px-3 py-3 text-lg" type="text" placeholder="What do you want to post ?" />
            </div>
            <div className="flex justify-end mx-3 " onClick={handlePost}>
            <button className="bg-mainColor px-5 py-1 rounded-2xl text-white text-md font-semibold">Post</button>

            </div>

        </div>
      </div>
    </div>
  );
};

export default CreatePost;

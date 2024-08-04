
import{Link} from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import banner from "../assets/banner.png";

const Profile = () => {
  const UserData = useSelector((store) => store.user);
  return (
    <div className=" m-1  max-w-screen sm:max-w-[250px]  min-w-16 border border-slate-300 h-56 bg-white  rounded-lg overflow-hidden">
      <div className="relative">
        <img src={banner} alt="banner" className="absolute top-0 " />
        <div className=" relative z-10 flex flex-col items-center py-3   ">
          <img src={UserData?.imageURL} className="w-16 rounded-full mt-6"alt="profile" />
          <div>
            <div className="px-2 text-sm font-semibold text-center">
              <Link to="/account" className="hover:underline hover:font-semibold">{UserData.userName} </Link>
            </div>
            <div className="px-2 text-xs text-slate-500 text-center mx-auto  max-w-[80%]">
              {" "}
              Frontend Developer | React | JavaScript | Learning DSA
            </div>
          </div>
        </div>

        <hr className="my-2" />
        <div>
          <div className=" flex justify-between px-2 text-xs font-semibold text-slate-500 mx-auto  max-w-[80%]">
            <span>Profile viewers :</span>
            <span className="text-mainColor">163</span>
          </div>
          <div className=" flex justify-between px-2 text-xs font-semibold text-slate-500 mx-auto  max-w-[80%]">
            <span>Post Impressions :</span>
            <span className="text-mainColor">16543</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

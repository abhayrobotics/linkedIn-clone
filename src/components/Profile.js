import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import banner from "../assets/banner.png";
import { updatePageLocation } from "../utils/userSlice";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import photo from "../assets/photo.jpg";


const Profile = ({ mainProfile }) => {
  const UserData = useSelector((store) => store.user);
  const UserData1 = useAuthState(auth)[0]
  // console.log(UserData1);
  const dispatch = useDispatch();
  return (
    <div className=" m-1 w-[350px] xsm:w-[90%] sm:w-[600px] mx-auto md:mx-3  md:min-w-[250px] md:w-[250px]  border border-slate-300 h-56 bg-white hover:shadow-md   rounded-lg overflow-hidden">
      <div className="relative">
        <img src={banner} alt="banner" className="absolute top-0 w-screen h-32 object-cover md:h-20 " />
        <div className=" relative z-10 flex flex-col items-center py-3   ">
          <img
            src={UserData1?.photoURL===null?photo:UserData1?.photoURL}
            className="w-24 md:w-16 rounded-full mt-12 md:mt-6"
            alt="profile"
          />
          <div>
            <div className="px-2 text-sm font-semibold text-center">
              <Link
                to="/account"
                className="hover:underline hover:font-semibold"
                onClick={() => {
                  dispatch(updatePageLocation("/account"));
                }}
              >
                {UserData.userName}{" "}
              </Link>
            </div>
            <div className="px-2 text-xs text-slate-500 text-center mx-auto  max-w-[80%]">
              {" "}
              Frontend Developer | React | JavaScript | Learning DSA
            </div>
          </div>
        </div>

        {mainProfile ? (
          <>
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
          </>
        ) : (
          <div className="flex justify-center">
            <button className="px-4 py-1 text-center text-mainColor font-semibold rounded-full border border-mainColor hover:bg-mainColor hover:bg-opacity-10 ">
              Connect
              <span className="px-1">
                <PersonAddAlt1Icon color="primary" />
              </span>{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

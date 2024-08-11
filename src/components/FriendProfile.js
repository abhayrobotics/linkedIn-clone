import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import banner from "../assets/banner.png";
import { updatePageLocation } from "../utils/userSlice";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const Profile = ({ mainProfile,data }) => {
  const UserData = useSelector((store) => store.user);
  // console.log(data)
  const dispatch = useDispatch();
  return (
    <div className=" m-1  max-w-screen sm:max-w-[250px]  min-w-[200px] border border-slate-300 h-56 bg-white hover:shadow-md   rounded-lg overflow-hidden">
      <div className="relative">
        <img src={data?.banner} alt="banner" className="absolute top-0 " />
        <div className=" relative z-10 flex flex-col items-center py-3   ">
          <img
            src={data?.image}
            className="w-16 rounded-full mt-6"
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
                {data?.name1}{" "}
              </Link>
            </div>
            <div className="px-2 text-xs text-slate-500 text-center mx-auto  max-w-[80%]">
              {data?.bio}
              
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

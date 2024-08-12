import React, { useEffect, useState } from "react";
import Header from "./Header";
import News from "./News";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Activity from "./Activity";
import Post from "./Post";
const AccountPage = () => {
  const { imageURL, userName } = useSelector((store) => store.user);
  const data = useAuthState(auth)[0];
  const [allDetails, setAllDetails] = useState([]);
  const [posts, setPosts] = useState([]);

  // console.log(uid);

  const dataFromdb = async () => {
    let uid = "";
    try {
      const query1 = await getDocs(collection(db, "users"));
      query1.forEach((item) => {
        // console.log(item?.id,data?.email);
        if (item.data()?.email1 === data?.email) {
          uid = item.id;
          // console.log(uid);
        }
      });

      // **********************************fetching User Info
      const docref = doc(db, "users", uid);
      const doc1 = await getDoc(docref);
      setAllDetails(doc1.data());
      // console.log(doc1.data(),uid);
    } catch (e) {
      console.log(e);
    }
  };

  const postData = async () => {
    let allPostData = [];
    try {
      const query2 = await getDocs(collection(db, "Posts"));
      query2.forEach((item) => {
        // console.log(item?.id,data?.email);
        if (item.data()?.email1 === data?.email) {
          allPostData.push(item.data());
        }
      });
      setPosts(allPostData);
      // console.log(allPostData);
      // console.log(posts);
    } catch (e) {
      console.log(e);
    }
  }

    useEffect(() => {
      dataFromdb();
      postData();
      // console.log(allDetails);
    }, []);

    return (
      <div className="bg-feedColor">
        <Header />
        <div className=" mt-6 rounded-t-lg flex  w-[90%]  md:w-10/12 mx-auto  ">
          {/* 1st half */}
          <div className="flex flex-col w-full">
            {/* banner and profile picture */}
            <div className="relative flex  rounded-xl object-cover bg-white ">
              {/* banner */}
              <img
                src={allDetails?.banner}
                alt="banner"
                className="absolute rounded-t-xl top-0 object-cover h-auto min-h-56 w-full overflow-hidden"
              />
              {/* profile picture */}
              <div className=" relative z-10 flex flex-col items-left ml-6 mt-10 py-3   ">
                <img
                  src={allDetails?.photo}
                  className="w-36 rounded-full mt-24 border-4 border-white"
                  alt="profile"
                />
                <div className="flex justify-between w-full">
                  {/* Basic details */}
                  <div className="flex flex-col">
                    <div className="px-2 text-2xl font-semibold pt-2 text-left">
                      {allDetails?.name1}
                    </div>
                    <div className="px-2 text-md text-slate-500 text-left">
                      {allDetails?.bio}
                    </div>
                    <div className="px-2 text-sm text-slate-500  text-left">
                      Kolkata, West Bengal
                      {allDetails?.location}
                    </div>
                  </div>
                  {/* Extra info */}
                  
                </div>
              </div>
            </div>
            {/* Certification and other Details */}
            <div>
              <Activity heading={"Experience"}/>
              <Activity heading={"Education"}/>
            </div>
            {/* posts */}
            
            <div>
            {console.log(posts)}
            {
              // post items
              posts?.map((data) => {
                // console.log(data);
                return <Post key={data.id} postData={data} />;
                // return <Post  key={data[0]}  postData={data[1]} name={data[2]} id={data[0]}  />;
              })
            }
            </div>
          </div>
          {/* second half */}
          <div className="w-3/12">
            <News />
          </div>
        </div>
      </div>
    );
  };

export default AccountPage;

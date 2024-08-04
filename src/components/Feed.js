import Header from "./Header";
import Profile from "./Profile";
import NewPost from "./NewPost";
import Post from "./Post";
import News from "./News";
import CreatePost from "./CreatePost";
import { useSelector } from "react-redux";

import { db } from "../utils/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate()
  const userData = useSelector(store=> store.user)
  const togglePostShow = useSelector((store) => store?.user?.postOpen);
 
  const [dataToShow, setData1] = useState([]);
  const [dataLength, setDatalength] = useState([]);

  // navigating if not logged in
  if(!userData.loggedIn){
    console.log(" trigger 1")
    // navigate("/");
  }

  useEffect(() => {
   
      previousPost();
  
    // console.log(dataToShow.length)
  }, []);

  // Read data from cloud
  const previousPost = async () => {
    const dataArray = [];
    const querySnapshot = await getDocs(collection(db, "Posts"));

    querySnapshot.forEach((doc) => {
      
      dataArray.push([
        doc.id,
        doc.data().post,
        doc.data().username,
        doc.data().date,
        doc.data().likeCount,
        doc.data().likeFlag,
      ]);

      // sorting data based on date, then latest first
      dataArray.sort((a, b) => a[3] - b[3]);
      dataArray.reverse();
      setDatalength(dataArray)
    });
    // console.log(dataArray);
    setData1(dataArray);
    // console.log(dataToShow);
  };

  return (
    <div>
      {togglePostShow && <CreatePost />}
      <Header />
      <div className=" bg-feedColor flex justify-center py-6 ">
        <div className=" flex justify-center flex-wrap flex-col sm:flex-row  w-9/12 ">
          <Profile className="w-2/12" />
          <div className="flex flex-col  ">
            <NewPost />
            <hr className="mx-1 my-2 border-1 border-slate-500" />

            {
              // post items
              dataToShow?.map((data) => {
                return <Post  key={data[0]}  postData={data}  />;
                // return <Post  key={data[0]}  postData={data[1]} name={data[2]} id={data[0]}  />;
              })
            }
          </div>
          <News className="min-w-2/12" />
          {/* <News className="w-1/4" /> */}
        </div>
      </div>
    </div>
  );
};

export default Feed;

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

const Feed = () => {
  const togglePostShow = useSelector((store) => store?.user?.postOpen);
  const [dataToShow, setData1] = useState([]);

  useEffect(() => {
    previousPost();
  }, []);

  const previousPost = async () => {
    // Read data from cloud
    const dataArray = [];
    const querySnapshot = await getDocs(collection(db, "Posts"));

    querySnapshot.forEach((doc) => {
      
      // console.log(`${doc.id} => ${doc.data().post}`);
      dataArray.push([doc.id,doc.data().post,doc.data().username,doc.data().date]);

      // sorting data based on date
      dataArray.sort((a, b) => a[3] - b[3]);
      dataArray.reverse()
    });
    console.log(dataArray)
    setData1(dataArray);
    console.log(dataToShow)
  };

  return (
    <div>
      {togglePostShow && <CreatePost />}
      <Header />
      <div className=" bg-feedColor flex justify-center py-6 ">
        <div className=" flex justify-center flex-wrap flex-col sm:flex-row  w-4/6 ">
          <Profile className="w-1/4" />
          <div className="flex flex-col  ">
            <NewPost />
            <hr className="mx-1 my-2 border-1 border-slate-500" />

            {// post items 
            dataToShow?.map((data) => {
              return <Post postData={data[1]} name={data[2]} key={data[0]} />;
            })}
          </div>
          <News className="w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default Feed;

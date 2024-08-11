import Header from "./Header";
import Profile from "./Profile";
import NewPost from "./NewPost";
import Post from "./Post";
import News from "./News";
import CreatePost from "./CreatePost";
import { useDispatch, useSelector } from "react-redux";

import { db } from "../utils/firebase";
import {
  getDocs,
  collection,
  onSnapshot,
  doc,
  query,
  limit,
  QuerySnapshot,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const togglePostShow = useSelector((store) => store?.user?.postOpen);
  const allPost = useSelector((store) => store?.post?.allPosts);
  const [dataToShow, setData1] = useState([]);
  const [dataLength, setDatalength] = useState(0);

  // navigating if not logged in
  if (!userData.loggedIn) {
    // console.log(" trigger 1");
    // navigate("/");
  }

  useEffect(() => {
    // console.log(" trigger 2", allPost);

    const PostQ = query(
      collection(db, "Posts"),
      // orderBy("date"),
      limit(20)
    );

    const unsubscibe = onSnapshot(PostQ, (QuerySnapshot) => {
      const AllpostData = [];

      QuerySnapshot.forEach((doc) => {
        AllpostData.push({ ...doc.data(), id: doc.id });
        // console.log(doc.data().date)
        AllpostData.sort((a, b) => a.date - b.date);
        AllpostData.reverse();
        // console.log(AllpostData);
        setData1(AllpostData);
      });

      return () => unsubscibe;
    });

    // PreviousPost();
  }, []);

  const PreviousPost = async () => {
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
        doc.data().photoURL,
      ]);

      // sorting data based on date, then latest first
      dataArray.sort((a, b) => a[3] - b[3]);
      dataArray.reverse();

      // dispatch(addPost(dataArray));
      // setDatalength(dataArray.length);
    });
    console.log(dataArray);
    setData1(dataArray);
  };

  return (
    <div className="relative overflow-x-hidden">
      {togglePostShow && <CreatePost />}
      <Header />
      <div className=" bg-feedColor flex justify-center py-6 ">
        <div className=" flex justify-center flex-wrap flex-col sm:flex-row  min-w-9/12 ">
          <Profile className="w-2/12 m-2" mainProfile={true} />
          <div className="flex flex-col  ">
            <NewPost />
            <hr className="mx-auto  my-2 w-[90%] md:w-[95%] border-1 border-slate-500" />

            {
              // post items
              dataToShow?.map((data) => {
                // console.log(data);
                return <Post key={data.id} postData={data} />;
                // return <Post  key={data[0]}  postData={data[1]} name={data[2]} id={data[0]}  />;
              })
            }
          </div>
          <div className="hidden lg:block ">

          <News className="min-w-2/12    " />
          </div>
          {/* <News className="w-1/4" /> */}
        </div>
      </div>
      {/* <Messenger /> */}
    </div>
  );
};

export default Feed;

// Read data from cloud

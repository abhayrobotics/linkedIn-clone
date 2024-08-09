import Header from "./Header";
import Profile from "./Profile";
import NewPost from "./NewPost";
import Post from "./Post";
import News from "./News";
import CreatePost from "./CreatePost";
import { useDispatch, useSelector } from "react-redux";

import { db } from "../utils/firebase";
import { getDocs, collection, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../utils/postSlice";
import Messenger from "./Messenger";

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
    console.log(" trigger 1");
    // navigate("/");
  }

  useEffect(() => {
    // db.collection("Posts").onSnapShot((snapshot) => {
    //   setData1(
    //     snapshot.docs.map((doc) => ({
    //       doc:doc.data(),
    //       id:doc.id
    //     }))
    //   );
    // });

    console.log(" trigger 2", allPost);

    // onSnapshot(doc(db,'Posts',"CsBuoh0eYgRQmIBIRYox"),(doc1)=>{
    //   console.log(doc1.data())
    // })

    PreviousPost();
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
    <div>
      {togglePostShow && <CreatePost />}
      <Header />
      <div className=" bg-feedColor flex justify-center py-6 ">
        <div className=" flex justify-center flex-wrap flex-col sm:flex-row  w-9/12 ">
          <Profile className="w-2/12" mainProfile={true} />
          <div className="flex flex-col  ">
            <NewPost />
            <hr className="mx-1 my-2 border-1 border-slate-500" />

            {
              // post items
              dataToShow?.map((data) => {
                return <Post key={data[0]} postData={data} />;
                // return <Post  key={data[0]}  postData={data[1]} name={data[2]} id={data[0]}  />;
              })
            }
          </div>
          <News className="min-w-2/12" />
          {/* <News className="w-1/4" /> */}
        </div>
      </div>
      <Messenger />
    </div>
  );
};

export default Feed;

// Read data from cloud

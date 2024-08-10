import FriendProfile from "./FriendProfile";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const PeopleToKnow = () => {

    const [data1 , setData1] = useState([]);
    useEffect(()=>{
        updateFriends();
      },[])

      const usersData =[];
    
      const updateFriends = async () => {
        const queryData = await getDocs(collection(db,'users'));
        
        queryData.forEach((doc)=>{
          console.log(doc.data());
          usersData.push(doc.data())
        
        })
        setData1(usersData);
        console.log(usersData);
          };

  return (
    <div className="flex   w-9/12 pl-3 pb-3">
        
        {/* side ui */}
        <div className="flex flex-col">
            <div>
            <h1 className="text-lg pl-2">My Network</h1>
                <div className="flex flex-wrap">
                    {data1?.map((user)=>(
                        
                        <FriendProfile mainProfile={false} data={user} key={user?.email}/>
                    ))}
                    
                </div>
            </div>
       
            <div className="p-3 rounded-lg bg-white border ">
                <h1 className="text-lg" >People you may know based on your recent activity</h1>
                <div className="flex">
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PeopleToKnow
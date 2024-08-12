import FriendProfile from "./FriendProfile";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";

const PeopleToKnow = () => {

    const [data1 , setData1] = useState([]);
    const user1 = useSelector(store=>store?.user)
    useEffect(()=>{
        updateFriends();
      },[])

      const usersData =[];
    
      const updateFriends = async () => {
        const queryData = await getDocs(collection(db,'users'));
        
        queryData.forEach((doc)=>{
          // console.log(doc.data());
          if(doc.data().email1 !== user1.email){

            usersData.push(doc.data())
          }
        
        })
        setData1(usersData);
        // console.log(usersData);
          };

  return (
    <div className="flex  w-[90%] mx-auto md:w-9/12  md:pl-3 pb-3">
        
        {/* side ui */}
        <div className="flex flex-col ">
            <div>
            <h1 className="text-lg pl-2 pb-2">My Network</h1>
                <div className="flex flex-wrap  mb-2">
                <div className="p-3 rounded-lg w-full bg-white border ">
                   <p>You have 0 Connection. Increase your Network to meet new opportuity </p>
                    </div>
                </div>
            </div>
       
            <div className="p-3 rounded-lg bg-white border ">
                <h1 className="text-lg" >People you may know based on your recent activity</h1>
                <div className="flex flex-wrap justify-evenly md:justify-normal ">
                    {data1?.map((user)=>(
                        
                        <FriendProfile mainProfile={false} data={user} key={user?.name1}/>
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PeopleToKnow
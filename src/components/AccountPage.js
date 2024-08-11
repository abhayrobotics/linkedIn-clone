import React, { useEffect } from 'react'
import Header from './Header'
import News from './News'
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../utils/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
const AccountPage = () => {
  const {uid,banner,photo,userName} = useSelector((store) => store.user);
  const data = useAuthState(auth)[0]
  console.log(uid)

  const dataFromdb = async ()=>{
    const docref = await getDoc(doc(db, "users",uid));
   
  }
  useEffect(()=>{
    
    dataFromdb();
  })
  return (
    <div>
      <Header />
      <div className= ' p-3 flex w-9/12 mx-auto flex-wrap'>
        <div className='w-10/12 bg-slate-700 h-24'>
        <img src={data?.banner} alt="banner" className="absolute top-0 " />
        <div className=" relative z-10 flex flex-col items-center py-3   ">
          <img
            src={data?.photoURL}
            className="w-16 rounded-full mt-6"
            alt="profile"
          />
          <div>
            <div className="px-2 text-sm font-semibold text-center">
              
                {userName}{" "}
              
            </div>
            <div className="px-2 text-xs text-slate-500 text-center mx-auto  max-w-[80%]">
              {" "}
              Frontend Developer | React | JavaScript | Learning DSA
            </div>
          </div>
        </div>

        
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
        

        </div>
        <News />
      </div>
    </div>
  )
}

export default AccountPage
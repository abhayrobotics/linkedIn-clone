import React, { useEffect, useRef, useState } from "react";

import Message from "./Message";
import SendMessage from "./SendMessage";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Hidden } from "@mui/material";
import { toggleMessageStatus } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Messenger = () => {
  const [allMessage, setAllMessage] = useState([]);
  const scroll = useRef();
  const dispatch =useDispatch();
  const messageStatus = useSelector((store) => store?.user?.messageStatus);

  const user = useAuthState(auth)[0];

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      console.log(sortedMessages);
      setAllMessage(sortedMessages);
    });
    return () => unsubscribe;
  }, [messageStatus]);

  const handleMessageContainer = () => {
    dispatch(toggleMessageStatus());
  };
  return (
    <div className="">
      <div className="z-20 fixed right-0 bottom-0 w-72   border-slate-500  rounded-t-lg border bg-white">
        {console.log(user)}

        {/* header */}
        <div className="flex justify-between p-2">
          <div className="flex items-center">
            <img src={user?.photoURL} className="w-8 rounded-full" />
            <p className="px-2 font-semibold">Messaging</p>
          </div>
          {console.log(messageStatus)}
          {messageStatus ? (
            <div className="cursor-pointer" onClick={handleMessageContainer}>
              <KeyboardArrowDownIcon />
            </div>
          ) : (
            <div className="cursor-pointer" onClick={handleMessageContainer}>
              <KeyboardArrowUpIcon />
            </div>
          )}
        </div>

        {/* messages */}

        <div
          className={`  ${
            messageStatus ? "h-[70svh] mb-12" : "h-0"
          } overflow-y-scroll  overflow-x-clip relative`}
        >
          {allMessage?.map((item) => {
            // console.log(item);
            return <Message key={item.id} message={item} />;
          })}
        </div>

        {/* send message */}
        <div className={`${messageStatus ? "block":"hidden"}`}>
          <span ref={scroll}></span>

          <SendMessage scroll={scroll} />
        </div>
      </div>
    </div>
  );
};

export default Messenger;

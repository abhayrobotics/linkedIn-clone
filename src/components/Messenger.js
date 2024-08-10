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
import { db } from "../utils/firebase";

const Messenger = () => {
  const [allMessage, setAllMessage] = useState([]);
  const scroll =useRef()

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
  }, []);

  return (
    <div className="">
      <div className=" fixed right-0 bottom-0 w-72 h-2/3  border-slate-500  rounded-t-lg border bg-white">
        {console.log(allMessage)}
        <div className=" h-96 overflow-y-scroll  overflow-x-clip relative">
          {allMessage?.map((item) => {
            console.log(item)
            return <Message key={item.id} message={item} />;
          })}
        </div>
        <span ref={scroll}></span>
        <SendMessage scroll={scroll} />
      </div>
    </div>
  );
};

export default Messenger;

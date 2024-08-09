import React, { useEffect, useState } from "react";
import SendMessage from "./SendMessage";
import { db } from "../utils/firebase";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import Message from "./Message";

const AllMessage = () => {
  const [allMessage, setAllMessage] = useState([]);

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
      setAllMessage(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div>
      <main className="chat-box">
        <div className="messages-wrapper">
          {allMessage?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
        {/* <span ref={scroll}></span>
        <SendMessage scroll={scroll} /> */}
      </main>
    </div>
  );
};

export default AllMessage;

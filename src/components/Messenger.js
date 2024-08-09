import {
  addDoc,
  collection,
  Firestore,
  serverTimestamp,
  limit,
  onSnapshot,
} from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../utils/firebase";
import AllMessage from "./AllMessage";

const Messenger = () => {
  const [message, setMessage] = useState("");
  const SendMessage = async (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      alert("Enter your message!");
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser;
    console.log(displayName);
    const timeStamp = serverTimestamp()

    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      uid,
      photo: photoURL,
      createdAt: timeStamp,
    });
    setMessage("");
  };

  return (
    <div>
      <div className=" absolute right-0 bottom-0 w-72 h-2/3 border-slate-500  rounded-t-lg border bg-white">
        <AllMessage />
        <form>
          <input
            type="text "
            className="bg-feedColor rounded-lg p-3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message"
          />
          <button
            className="border bg-slate-300 p-3 mx-2 rounded-md"
            onClick={(e) => SendMessage(e)}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messenger;

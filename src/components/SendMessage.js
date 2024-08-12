import {
  addDoc,
  collection,
  Firestore,
  serverTimestamp,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import { useEffect, useState } from "react";

const SendMessage = ({scroll}) => {

  const [message, setMessage] = useState("");

  
  // send message function
  const sendMessage = async (e) => {
    e.preventDefault();


    if (message.trim() === "") {
      alert("Enter your message!");
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser;
    // console.log(displayName);
    const timeStamp = serverTimestamp();

    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      uid,
      photo: photoURL,
      createdAt: timeStamp,
    });
    setMessage("");
    
    scroll.current.scrollIntoView({ behavior: 'smooth' });
      
    

  };
  return (
    <div className="absolute bottom-0">
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
          onClick={(e) => sendMessage(e)}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;

import React from "react";
import { auth } from "../utils/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
const Message = ({ message }) => {

  const logInUser = useAuthState(auth)[0].uid;
  console.log(logInUser)
  console.log(message.uid)
  return (
    <div className=" flex flex-col p-2">
      <div className={` text-sm  p-2 ${logInUser ===message.uid ? "owner":"receiver"}`}>
      <div className="flex justify-between">
        <div className="flex">
          <img src={message?.photo} className="w-8 rounded-full" />

          <div className="px-2 text-sm font-semibold" >{message?.name}</div>
        </div>
      </div>
      <div className="ml-10 w-[80%]">

      {message?.text}
      </div>
      </div>
    </div>
  );
};

export default Message;

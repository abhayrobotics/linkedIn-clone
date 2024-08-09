import { collection, Firestore } from 'firebase/firestore';
import React from 'react'

const Messenger = () => {

    const messageRef = Firestore.collection("messages")

    const sendMessage = async (e)=>{
        e.preventDefault();
        

    }


  return (
    <div>
        <div className=' absolute right-0 bottom-0 w-72 h-2/3 border-slate-500  rounded-t-lg border bg-white'>

            <form>

            <input type='text ' className='bg-feedColor rounded-lg p-3' placeholder='Write a message' />
            <button className='border bg-slate-300 p-3 mx-2 rounded-md' onClick={sendMessage}>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Messenger
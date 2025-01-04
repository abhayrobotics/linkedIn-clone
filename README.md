
## [GO TO WEBSITE](https://linked-in-abhay.netlify.app/)


## Stack used 
- React
- react-router-dom
- tailwind
- Material UI icons
- Firebase Authentication
- firebase firestore
- realtime firestore db
- news API
- redux Toolkit

## Features to add

- login page✅
- login Error Handling✅
- firebase authentication✅
- Header✅
- icon in header✅ 
- search functionality
- create a post :✅
- like ✅
- share comment , reply to a comment (nested)
- firebase firestore✅
- network page with people to connect
- search with gemini ai, post with ai
- lazy loading
- memoization
- messaging✅
- multiple user signup handling ✅
    - check unique user and adding to database✅
- page for people to follow.
- connection request
- editable account page.
- upload a photo in post using firebase storage.
- gemini ai  for improving post

## File Component Structure

- Login
- feed
  - Header(z-20)
  - Profile -->img(z-10)
  - NewPost --> Create Post(z-30)
  - Post(multiple)
  - News
  - Messenger(z-20)
      - SendMessage
      - Message
- Account Page
      - Banner and Basic Info
      - Activity
      - Post(multiple):pending
- Network Page
  - Profile
  - PeopleToknow

## Bug
- not rerender on new post arrival
- like button not updated.✅
- navigate using if loggdin ?✅
    - authentication have tobe checked with firebase server  as  redux variable gets null on refresh✅
- profile photo change on refresh bug✅
- overflow-scroll not working in message ✅`
- scroll to current msg pending
- click on messaging to open and not on up arrow only
- a post can only be liked once. change to like for more users.
- in post line change is replaced by space
- first login email = null in db

## standard

- px-2 py-3 my-2

# STEP BY STEP GUIDE

## React Setup

- open terminal
  - cd linkedin
  - npx create-react-app .
    - delete the icon, test.js file and app.css code in src folder
  - npm start : check running server

## configure tailwind from website steps

    - follow https://tailwindcss.com/docs/guides/create-react-app

## configure react-router-dom

    - npm i -D react-router-dom
    - set up the main component as <Body /> in app.js
    - Set the path in the Body component using createBrowserRouter and RouterProvider methods

```javascript
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/feed",
      element: <Feed />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
```

## Material UI icons

- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material

  ### USAGE

  - import LinkedInIcon from '@mui/icons-material/LinkedIn';

  - <LinkedInIcon sx={{ fontSize: 40 }} color="primary"/>

## firebase Authentication

- login in fireabase website and create a project
- npm install firebase
- npm install -g firebase-tools
- firebase login - firebase init

- create a firebase.js file and make sure to export the auth as we have to use in another file login.js

      ``` javascript
        import { initializeApp } from "firebase/app";
        import { getAuth } from "firebase/auth";
        import { getAnalytics } from "firebase/analytics";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
        apiKey: "AIzaSyAQYiSTbS3BF-pJo3TuaPc1eRaLyZpx5dg",
        authDomain: "linkedin-17df8.firebaseapp.com",
        projectId: "linkedin-17df8",
        storageBucket: "linkedin-17df8.appspot.com",
        messagingSenderId: "825634578071",
        appId: "1:825634578071:web:65424792e9c50fbf5053d2",
        measurementId: "G-ZNWZQXXJVP"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        export const auth = getAuth(app);

  ```

  ```

- in login.js for sign up

  ```javascript
  import { auth } from "../utils/firebase";
  import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import { useRef } from "react";

  const Login = () => {
    const email1 = useRef();
    const password1 = useRef();

    // sign up
    const handleSignup = (e) => {
      console.log(email1.current.value, password1.current.value);

      createUserWithEmailAndPassword(
        auth,
        email1.current.value,
        password1.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log("signup sucess");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    };
    return (
      <>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={email1}
            className="px-2 py-3 my-2 border text-lg border-slate-400 rounded-md"
            type="email"
            placeholder="Email"
          />
          <input
            ref={password1}
            className="px-2 py-3 my-2 border text-lg border-slate-400 rounded-md"
            type="password"
            placeholder="Password"
          />

          <button
            onClick={handleSignup}
            className="bg-mainColor hover:bg-maindark my-2 py-3 rounded-3xl text-white cursor-pointer font-semibold  "
          >
            Sign in
          </button>
        </form>
      </>
    );
  };
  ```

## Redux Setup

- install Redux and itds toolkit
  - npm i react-redux
  - npm i -D @reduxjs/toolkit
- created redux using user slice

  ```javascript
      import { createSlice } from "@reduxjs/toolkit";


      const userSlice = createSlice({
      name:"user",
      initialState:{
          userName:null,
          email:null
      },
      reducers:{
          addUserName:(state,action)=>{
              state.userName =action.payload;
          },
          addUserEmail:(state,action)=>{
              state.email =action.payload;
          }
      }
      })

      export {addUserName,addUserEmail} from userSlice.actions;
      export default userSlice.reducer;
  ```

- create an appstore

  ````javascript
  import  {configureStore} from "@reduxjs/toolkit"
  import  userReducer  from "./userSlice";

  const appStore = configureStore({
      reducer:{
          user:userReducer,
      }
  })

  export default appStore;```

  ````

- link the app store to our main app

  ```javascript
  import Body from "./components/Body";
  import { Provider } from "react-redux";
  import appStore from "./utils/appStore";

  function App() {
    return (
      <Provider store={appStore}>
        <Body />
      </Provider>
    );
  }

  export default App;
  ```

## Firebase Firestore

- Inside terminal
  npm install firebase-admin --save

- create a fireabase.js file

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  FIREBASE_CONFIGURATION,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service and export to use in other compoenent
export const db = getFirestore(app);
```

- open console of firebase database , create a database collection with DEMO case ,

### Read the firesstore data

calling an async function with

```javascript
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

// inside a component
const handlePost = async () => {
  console.log("check");

  // reading data from cloud
  const querySnapshot = await getDocs(collection(db, "Posts"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().post}`);
  });

    // add new  data to cloud
  try {
    const docRef = await addDoc(collection(db, "Posts"), {
      post: "Ada",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

   // Add a new document in collection "cities" with id =LA
    await setDoc(doc(db, "Posts", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
};
```

## navigate using firebase onchangeauth method

## created profile secton 

## implemented news API and its component

## navigating using pageLocation variable , updatepageLocation rerducer in user Slice redux

## created a network page with my network and people o know

## created a userdatabase on signup using createUserDatabase fucntion in login.js

## messenger
- npm install react-firebase-hooks
- created chat app using firebase firestore having 3 component
  - messenger- Chat UI
              - retriving the data using OnsnapShot method  of firebase and then storing in a state component and send each message to Message component for rendering 
  - Send message- using addDoc storing the message in db 
  - message - looping the component for UI. design based on owner or receiver.
            -

## Gemini AI
- npm install @google/generative-ai

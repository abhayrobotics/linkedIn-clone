## Stack used

- React
- react-router-dom
- tailwind

## Features to add

- login page
- firebase authentication
- Header
- icon in header + search functionality
- create a post :like share comment , reply to a comment
- search with gemini ai, post with ai
- firebase cloudstore
-

# STEP BY STEP GUIDE

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
       <form className="flex flex-col"onSubmit={(e)=>e.preventDefault()}  >
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

            <button  onClick={handleSignup} className="bg-mainColor hover:bg-maindark my-2 py-3 rounded-3xl text-white cursor-pointer font-semibold  ">
              Sign in
            </button>
          </form>
      </>
    );
  };
  ```

## standard

- px-2 py-3 my-2

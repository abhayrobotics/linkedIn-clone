import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const email1 = useRef();
  const password1 = useRef();
  const navigate = useNavigate();


// toggle sign in
  const handleSigIn =()=>{
    setSignIn(!signIn);
  }

  // ********************sign In via email password
  const handleSignup = () => {
    // console.log(email1.current.value, password1.current.value);

    // if false then sign UP
    if (!signIn) {
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
          navigate("/feed");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    }

    // if true then sign in
    if (signIn) {
      signInWithEmailAndPassword(
        auth,
        email1.current.value,
        password1.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signIN success")
          // ...
          navigate("/feed");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  // *********************** sign in via google
  const googleSignup = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="h-[100svh]">
      {/* ******************** logo*********** */}
      <div className="flex items-center py-5 px-5 text-mainColor text-2xl font-bold">
        <h2>Linked</h2>
        <LinkedInIcon sx={{ fontSize: 32 }} color="primary" />
      </div>
      {/* ***************** sign up card */}
      <div className="flex justify-center  mt-10">
        <div className="flex flex-col  w-[350px]  p-2 sm:p-6 shadow-lg hover:shadow-xl rounded-lg ">
          <div>
            <h2 className="text-3xl mb-1">{signIn?"Sign In":"Sign Up"}</h2>
            <h3 className="text-sm">
              Stay updated on your professional world.
            </h3>
          </div>

          {/* ************************ Login form */}
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
            <div className="text-xs my-2">
            By clicking , you agree to LinkedIn’s User Agreement,
            Privacy Policy, and Cookie Policy.
          </div>
            <button
              onClick={handleSignup}
              className="bg-mainColor hover:bg-maindark my-2 py-3 rounded-3xl text-white cursor-pointer font-semibold  "
            >
              {signIn?"Sign In":"Agree & Join"}
            </button>
          </form>
          {/* ****************** separator************************* */}
          <div className="my-2 flex justify-center items-center">
            <div className="bg-slate-300 h-[1px] min-w-32 mx-2"></div>
            <p>or</p>
            <div className="bg-slate-300 h-[1px] min-w-32 mx-2"></div>
          </div>
          

          <button
            onClick={googleSignup}
            className="flex justify-center border-2 cursor-pointer items-center  hover:bg-slate-100 py-3 border-slate-400 rounded-3xl text-blue font-semibold  "
          >
            <img className="mr-2" src={google} />
            <p>Continue with Google</p>
          </button>
         

          <div className="ml-2 my-2 text-center">
            {signIn? "New to LinkedIn ?":"Already a user ?"}
            <span onClick={handleSigIn} className="ml-2 text-mainColor cursor-pointer  px-3 py-1  hover:bg-maindark hover:text-white  rounded-xl font-semibold">
            {signIn? "Join now":"Sign In"}
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;

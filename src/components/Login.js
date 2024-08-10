import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import photo from "../assets/photo.jpg";
import Header from "./Header";
import { auth, db } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addErrorMessage,
  adduid,
  addUserEmail,
  addUserName,
  addUserphoto,
  checkLoggedIn,
} from "../utils/userSlice";
import { addDoc, collection, getDocs } from "firebase/firestore";
import banner from "../assets/banner.png";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [unique, setunique] = useState(true);

  const email1 = useRef();
  const password1 = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMes = useSelector((store) => store.user.errorMessage);
  const userData = useSelector((store) => store.user);
  const user1 = useAuthState(auth)[0];

  // toggle sign in
  const handleSignIn = () => {
    setSignIn(!signIn);
  };

  // ************************* creating user database on signup
  // checking for data in google email , else creating demo data
  const uniqueUser = async () => {
    console.log("uniqueUser")
    const allUsers = await getDocs(collection(db, "users"));
    let isUnique = true;
    allUsers.forEach((item) => {
      console.log(item.data())
      if (item.data().email1 === userData.email) {
        isUnique = false;
        console.log("user already exist", item.data().email1, userData.email,unique);
      }
    });
   
    return isUnique;
  };
  const createUserDatabase = async () => {
    try {
      // add to database ifcheck for unique user
      const isUnique = await uniqueUser();
      if(!isUnique) return;
      
     
        console.log("createUserDatabase")
        const docRef = await addDoc(collection(db, "users"), {
          name1:
            userData?.userName !== null
              ? userData?.userName
              : userData?.email?.split("@")[0],
          bio: "Job Seeker | Tech Enthusiast",
          email1: userData.email,
          image: userData.imageURL,
          friends: [],
          photo: userData?.imageURL !== null ? userData?.imageURL : photo,
          banner: banner,
          location: null,
          posts: [],
          // uid: user1?.uid !== null ? user1?.uid : "uid" + email1,
        });
        console.log("created user database");
      
    } catch (e) {
      console.log(e);
    }
  };

  // ********************sign Up via email password
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
          const user = userCredential.user;
          // ...
          console.log("signup sucess", email1?.current?.value?.split("@")[0]);
          // addding user data
          dispatch(addUserEmail(user?.email));
          dispatch(addUserName(user?.email?.split("@")[0]));
          dispatch(checkLoggedIn(true));
          createUserDatabase();

          // updating he auth user
          updateProfile(auth.currentUser, {
            displayName: user?.email?.split("@")[0],
            photoURL: photo,
            banner: banner,
          });

          // nagivation if sucess
          navigate("/feed");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);

          dispatch(addErrorMessage(errorMessage));
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
          console.log("signIN success");
          // ...
          dispatch(addUserEmail(user.email));
          dispatch(addUserName(user.email.split("@")[0]));
          dispatch(checkLoggedIn(true));
          navigate("/feed");
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;

          dispatch(addErrorMessage(errorMessage));
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
        console.log(user, auth);
        dispatch(addUserEmail(user.email));
        dispatch(addUserName(user.displayName));
        dispatch(addUserphoto(user.photoURL));
        dispatch(checkLoggedIn(true));
        dispatch(adduid(user.uid));
        // console(user)
        createUserDatabase();
        navigate("/feed");
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorMessage);
        dispatch(addErrorMessage(errorMessage));
      });
  };

  return (
    <div className="h-[100svh]">
      <Header show={"hidden"} />
      {/* ******************** logo*********** */}
      <div className="flex items-center  py-5 px-5 text-mainColor text-2xl font-bold">
        <h2>Linked</h2>
        <LinkedInIcon sx={{ fontSize: 32 }} color="primary" />
      </div>
      {/* ***************** sign up card */}
      <div className="flex justify-center  mt-10">
        <div className="flex flex-col  w-[350px]  p-2 sm:p-6 shadow-lg hover:shadow-xl rounded-lg ">
          <div>
            <h2 className="text-3xl mb-1">{signIn ? "Sign In" : "Sign Up"}</h2>
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
              className="px-2 py-3 my-2 border text-lg border-slate-400  rounded-md"
              type="password"
              placeholder="Password"
            />
            {errorMes && (
              <div className="text-sm  text-red-600 font-semibold my-2">
                {errorMes.split(":")[1]}
              </div>
            )}
            <div className="text-xs  my-2">
              By clicking , you agree to LinkedIn’s User Agreement, Privacy
              Policy, and Cookie Policy.
            </div>
            <button
              onClick={handleSignup}
              className="bg-mainColor hover:bg-maindark my-2 py-3 rounded-3xl text-white cursor-pointer font-semibold  "
            >
              {signIn ? "Sign In" : "Agree & Join"}
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
            {signIn ? "New to LinkedIn ?" : "Already a user ?"}
            <span
              onClick={handleSignIn}
              className="ml-2 text-mainColor cursor-pointer  px-3 py-1  hover:bg-maindark hover:text-white  rounded-xl font-semibold"
            >
              {signIn ? "Join now" : "Sign In"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

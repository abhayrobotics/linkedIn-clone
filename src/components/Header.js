import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUserEmail, addUserName, checkLoggedIn, updatePageLocation } from "../utils/userSlice";


const Header = ({show}) => {

  const userName = useSelector(store=>store.user.userName);
  const userData = useSelector(store=>store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // handles chnage in auth state, same code in Login
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        //   dispacth an action using reducer fn()
        dispatch(addUserEmail(user.email));
        dispatch(addUserName(user.displayName));
        dispatch(checkLoggedIn(true));

        // navigating to feed page
        navigate(userData.pageLocation);
      } else {
        // User is signed out
        dispatch(checkLoggedIn(false));
        navigate("/");
      }
    });

    // unsubscribe when the component unmounts
    return () => unSubscribe();
  }, [dispatch, navigate]);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out success",auth);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // console.log(error);
      });
  };


  return (
    <div className={`${show} sticky top-0 left-0 flex justify-center bg-white z-20`}>
      <div className="flex justify-between max-w-7/12 w-9/12">
        <div className="flex items-center py-2 px-5 text-mainColor ">
          <LinkedInIcon sx={{ fontSize: 44 }} color="primary" />
          <SearchIcon sx={{ fontSize: 25 }} color="primary" />
        </div>
        {/* *********************icons**************** */}
        <div className="flex items-center ">
          <Link to="/feed" onClick={()=>dispatch(updatePageLocation("/feed"))}>
            <div className="flex flex-col mx-2 items-center hover:text-black cursor-pointer ">
              <HomeIcon
                className="text-slate-400 hover:text-black "
                sx={{ fontSize: 25 }}
              />
            <p className=" text-xs  text-slate-600 scroll ">Home</p>
            </div>
          </Link>

          <Link to="/network" onClick={()=>dispatch(updatePageLocation("/network"))}>
            <div className="flex flex-col mx-2 items-center hover:text-black cursor-pointer ">
              <PeopleIcon
                className="text-slate-400 hover:text-black "
                sx={{ fontSize: 25 }}
              />
            <p className=" text-xs  text-slate-600 scroll text-nowrap ">My Network</p>
            </div>
          </Link>

          <div className="flex flex-col mx-2 items-center hover:text-black cursor-pointer ">
            <WorkIcon
              className="text-slate-400 hover:text-black "
              sx={{ fontSize: 25 }}
            />
           <p className=" text-xs  text-slate-600 scroll ">Jobs</p>
          </div>

          <div className="flex flex-col mx-2 items-center hover:text-black cursor-pointer ">
            <TextsmsIcon
              className="text-slate-400 hover:text-black "
              sx={{ fontSize: 25 }}
            />
           <p className=" text-xs  text-slate-600 scroll ">Messages</p>
          </div>

          <div className="flex flex-col mx-2 items-center hover:text-black cursor-pointer ">
            <NotificationsIcon
              className="text-slate-400 hover:text-black "
              sx={{ fontSize: 25 }}
            />
           <p className=" text-xs  text-slate-600 scroll ">Notifications</p>
          </div>

          <div className="flex flex-col mx-2 items-center hover:text-black cursor-pointer ">
            <AccountCircleIcon
              className="text-slate-400 hover:text-black "
              sx={{ fontSize: 25 }}
            />
            <p className=" text-xs  text-slate-600 scroll text-nowrap" onClick={handleSignOut}> {userName==null?"My Account":userName}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;

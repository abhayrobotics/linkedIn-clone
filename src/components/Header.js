import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between max-w-7/12 w-4/6">
        <div className="flex items-center py-2 px-5 text-mainColor ">
          <LinkedInIcon sx={{ fontSize: 44 }} color="primary" />
          <SearchIcon sx={{ fontSize: 25 }} color="primary" />
        </div>
        {/* *********************icons**************** */}
        <div className="flex items-center ">
          <div className="flex flex-col mx-2 items-center hover:text-black cursor-pointer ">
            <HomeIcon
              className="text-slate-400 hover:text-black "
              sx={{ fontSize: 25 }}
            />
           <p className=" text-xs  text-slate-600 scroll ">Home</p>
          </div>

          <div className="flex flex-col mx-2 items-center hover:text-black cursor-pointer ">
            <PeopleIcon
              className="text-slate-400 hover:text-black "
              sx={{ fontSize: 25 }}
            />
           <p className=" text-xs  text-slate-600 scroll ">My Network</p>
          </div>

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
            <p className=" text-xs  text-slate-600 scroll ">Account</p>
          </div>

        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Header;

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import google from "../assets/google.png"

const Login = () => {
  return (
    <div className="h-[100svh]">
      <div className="flex items-center py-5 px-5 text-mainColor text-2xl font-bold">
        <h2>Linked</h2>
        <LinkedInIcon sx={{ fontSize: 32 }} color="primary" />
      </div>
      <div className="flex justify-center  mt-10">
        <div className="flex flex-col  w-[350px]  p-2 sm:p-6 shadow-lg ">
          <div>
            <h2 className="text-3xl ">Sign In</h2>
            <h3 className="text-sm">Stay updated on your professional world.</h3>
          </div>

          {/* ************************ Login */}
          <form className="flex flex-col">
            <input className="px-2 py-3 my-2 border text-lg border-slate-400 rounded-md" type="email" placeholder="Email"/>
            <input className="px-2 py-3 my-2 border text-lg border-slate-400 rounded-md" type="password" placeholder="Password"/>

            <button className="bg-mainColor my-2 py-3 rounded-3xl text-white cursor-pointer font-semibold  ">
              Sign in
            </button>
          </form>
          {/* ****************** separator************************* */}
          <div className="my-2 flex justify-center items-center"> 
            <div className="bg-slate-300 h-[1px] min-w-32 mx-2"></div>
            <p>or</p>
            <div className="bg-slate-300 h-[1px] min-w-32 mx-2"></div>
          </div>
          <div className="text-xs mb-2">By clicking Continue, you agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.</div>

          <button className="flex justify-center border-2 cursor-pointer items-center  py-3 border-slate-400 rounded-3xl text-blue font-semibold  ">
              <img className="mr-2" src={google} /><p>Continue with Google</p>
            </button>

        </div>
      </div>
    </div>
  );
};

export default Login;

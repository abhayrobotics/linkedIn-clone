import Header from "./Header";
import JobTracker from "./JobTracker";
import Profile from "./Profile";

export const Jobs = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-feedColor min-h-screen w-vw flex flex-wrap justify-center border border-red-400">
        <div className=" flex  justify-center flex-wrap border border-red-400 flex-col sm:flex-row w-9/12 #min-w-9/12 p-2">
          <Profile mainProfile={true} />
          <div className="w-9/12  mx-auto   md:pl-3 border border-black">
         
            <JobTracker />
          </div>
        </div>
      </div>
    </div>
  );
};

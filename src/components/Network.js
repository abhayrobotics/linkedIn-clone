
import Header from "./Header";
import PeopleToKnow from "./PeopleToKnow";
import Profile from "./Profile";


const Network = () => {

  
  return (
    <div>
      <Header />
      <div className="bg-feedColor w-svw flex flex-wrap justify-center ">
        <div className=" flex justify-center flex-wrap flex-col sm:flex-row  min-w-9/12 p-2">
        
          <Profile mainProfile={true} />

          <PeopleToKnow />
        </div>
      </div>
    </div>
  );
};

export default Network;


import Header from "./Header";
import PeopleToKnow from "./PeopleToKnow";
import Profile from "./Profile";


const Network = () => {

  
  return (
    <div>
      <Header />
      <div className="bg-feedColor w-svw flex justify-center">
        <div className="flex w-9/12  p-3 ">
        
          <Profile mainProfile={true} />

          <PeopleToKnow />
        </div>
      </div>
    </div>
  );
};

export default Network;

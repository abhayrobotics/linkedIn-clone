import Profile from "./Profile"

const PeopleToKnow = () => {
  return (
    <div className="flex max-w-6/12 pl-3 pb-3">
        
        {/* side ui */}
        <div className="flex flex-col">
            <div>
            <h1 className="text-lg pl-2">My Network</h1>
                <div className="flex">
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
            </div>
       
            <div className="p-3 rounded-lg bg-white border ">
                <h1 className="text-lg" >People you may know based on your recent activity</h1>
                <div className="flex">
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PeopleToKnow
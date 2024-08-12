const Activity = ({heading}) => {
  return (
    <div>
      <div className="my-3  p-3 mx-auto  w-[350px] xsm:w-[90%] sm:w-full  border border-slate-300  bg-white  rounded-lg">
        <div className="flex flex-col">
          <div className="text-xl text-black p-2 font-semibold"   >{heading}</div>
          <div className="text-md text-black  font-semibold pl-4"   >Sub Heading</div>
          <div className="text-md text-slate-500 pl-4 "  >Description Line 1</div>
          <div className="text-md text-slate-500  pl-4 "  >Description Line 2</div>
          <div className="text-sm text-slate-500  pl-4 "  >Description Line 3</div>
         
        </div>
      </div>
    </div>
  );
};

export default Activity;

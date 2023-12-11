function DropDown() {
  return (
    <>
      <div className=" w-[190px] sm:left-[50rem] absolute pl-[15px] pb-[15px] pt-[15px] pr-[15px] lg:left-[67rem] top-[4.5rem] h-[230px] bg-white border-[0.5px] border-[#AFAFAF] rounded-[2px] opacity-1 ">
        <ul className=" flex flex-col h-[100%] justify-between text-left ">
          <li className="text-[16px] border-b-[0.5px] pb-[5px] border-b-[#AFAFAF] font-semibold text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">My Profile</li>
          <li className="text-[16px] font-semibold  border-b-[0.5px] pb-[5px] border-b-[#AFAFAF] text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">Manage Users</li>
          <li className="text-[16px] font-semibold  border-b-[0.5px] pb-[5px] border-b-[#AFAFAF] text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">Add New User</li>
          <li className="text-[16px] flex justify-between font-semibold  border-b-[0.5px] pb-[5px] border-b-[#AFAFAF] text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">
            Messages
            <div className="w-[24px] h-[24px] rounded-[30px] bg-[#50B848] flex justify-center items-center text-center ">
              <h3 className=" text-[#fff] text-[10px] ">1</h3>
            </div>
          </li>
          <li className="text-[16px] font-semibold text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">Sign Out</li>
        </ul>
      </div>
    </>
  );
}

export default DropDown;

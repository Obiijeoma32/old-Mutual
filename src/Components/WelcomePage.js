import { Link } from "react-router-dom";
import oldMutual from "./images/brokerdasboard@2x.png";

function WelcomePage() {
  return (
    <>
      {/* Desktop View */}
      <div className=" mobile:hidden lg:block ">
        <div className=" w-full  p-[70px] flex justify-between items-center ">
          <div className="  w-[47%] ">
            <h1 className="text-[44px] w-[600px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Welcome to OldMutual Brokers' Platform.</h1>
            <p className=" tracking-[1.06px] mt-[32px] text-[#808285] font-normal text-[24px] text-left opacity-[1] ">
              An end to end insurance broker digital solution. Broker plaform saves time and prevents all sorts of process bottlenecks to allow brokers to request Quotes,Buy insurance, create claims, manage renewals and handle correspondence with the
              Insurer.
            </p>
            <div className=" mt-[44px] flex justify-between w-[500px] items-center ">
              <Link to="/brokerdetails">
                <div className=" transition ease-out duration-[0.3s] text-center tracking-[0.26px] flex justify-center items-center rounded-[8px] opacity-[1] w-[237px] h-[51px] text-[16px] font-normal text-[#fff] bg-[#50B848]  ">Get Started</div>
              </Link>
              <Link to="/login">
                <div className=" text-center tracking-[0.26px] flex justify-center items-center rounded-[8px] opacity-[1] w-[237px] h-[51px] text-[16px] font-normal text-[#50B848] border-[1px] border-[#50B848]  ">Sign In</div>
              </Link>
            </div>
            <p className=" mt-[64px] w-[700px] text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
              By clicking on sign in button, you agree to our<span className="text-[#009677]"> terms of use & privacy policy</span>{" "}
            </p>
          </div>
          <div className=" flex justify-center items-center h-[613px] w-[50%] ">
            <img className=" w-[600px]  " src={oldMutual} alt="old Mutual" />
          </div>
        </div>
        <div className=" pl-[70px] tracking-[0.38px] opacity-[1] mt-[200px]">
          <p className=" text-[24px] font-normal text-[#2E3D56CC]">
            Having troubles? <span className="text-[#009677] font-bold ">Contact Support</span>
          </p>
        </div>
      </div>
      {/* Mobile View */}
      <div className=" lg:hidden h-fit  mobile:block ">
        <div className=" w-full  p-[70px] flex justify-between items-center ">
          <div className=" w-[90%]  ">
            <h1 className="text-[44px]  tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Welcome to OldMutual Brokers' Platform.</h1>
            <p className=" tracking-[1.06px] mt-[32px] text-[#808285] font-normal text-[24px] text-left opacity-[1] ">
              An end to end insurance broker digital solution. Broker plaform saves time and prevents all sorts of process bottlenecks to allow brokers to request Quotes,Buy insurance, create claims, manage renewals and handle correspondence with the
              Insurer.
            </p>

            <div className=" mt-[44px] flex justify-between w-full items-center ">
              <Link className="w-[45%]" to="/brokerdetails">
                <div className=" transition ease-out duration-[0.3s] text-center tracking-[0.26px] flex justify-center items-center rounded-[8px] opacity-[1]  h-[51px] text-[16px] font-normal text-[#fff] bg-[#50B848]  ">Get Started</div>
              </Link>
              <Link className="w-[50%]" to="/login">
                <div className=" text-center tracking-[0.26px] flex justify-center items-center rounded-[8px] opacity-[1] h-[51px] text-[16px] font-normal text-[#50B848] border-[1px] border-[#50B848]  ">Sign In</div>
              </Link>
            </div>
            <p className=" mt-[64px] w-[90%] text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
              By clicking on sign in button, you agree to our<span className="text-[#009677]"> terms of use & privacy policy</span>{" "}
            </p>
          </div>
          {/* <div className=" flex justify-center items-center h-4/6 w-[50%] ">
            <img className=" w-[600px]  " src={oldMutual} alt="old Mutual" />
          </div> */}
        </div>
        <div className=" pl-[70px] tracking-[0.38px] opacity-[1] mt-[200px]">
          <p className=" text-[24px] font-normal text-[#2E3D56CC]">
            Having troubles? <span className="text-[#009677] font-bold ">Contact Support</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;

// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import leaf from "./images/signin.png";
// import classNames from "classnames";

function BrokerDetails({ steps, currentStep }) {
  //   const [barWidth, setBarWidth] = useState(0);

  //   const stepWidth = 100 / steps;

  //   const updateProgressBar = () => {
  //     const newWidth = stepWidth * currentStep;
  //     setBarWidth(newWidth);
  //   };
  //   useEffect(() => {
  //     updateProgressBar();
  //   }, [currentStep]);

  const options = [
    { id: 1, label: " Brokers' Details " },
    { id: 2, label: "Broker's Address" },
    { id: 3, label: "Broker's Contact Details" },
    { id: 4, label: "Upload CAC Documents" },
  ];

  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });

  //     // Automatically move to the next step when the user fills the current form
  //     if (formData.step < 4) {
  //       setFormData((prevData) => ({ ...prevData, step: prevData.step + 1 }));
  //     }
  //   };
  return (
    <>
      {/* Desktop View */}
      <div className="mobile:hidden lg:block ">
        <div className=" w-[100%] p-[90px] flex justify-between items-center ">
          {/* Welcome Note */}
          <div className="  w-[45%]  ">
            <div className=" w-[210px] ml-[-20px] mb-[32px] h-[47px] ">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="text-[44px] w-[600px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Guaranteed Insurance for individuals and Organization</h1>
            <p className=" tracking-[1.06px] mt-[32px] text-[#808285] font-normal text-[24px] text-left opacity-[1] ">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
            <div className=" mt-[45px] h-[500px] ">
              <form>
                {options.map((option) => (
                  <label key={option.id} className="flex mb-[35px]  items-center space-x-2">
                    <input type="radio" name="radioGroup" value={option.id} className="appearance-none h-[32px] w-[32px] opacity-[1] border border-[#8DC63F] rounded-full checked:bg-[#009677] checked:border-transparent focus:outline-none" />
                    <span className="text-[20px] pl-[10px] font-normal text-[#2E3D56CC] ">{option.label}</span>
                  </label>
                ))}
              </form>
            </div>
          </div>
          {/* Form starts */}
          <div className=" w-[45%]">
            {/* <div className="bg-[#009677] ">
            <div className="flex mb-2 items-center justify-between">
              {Array.from({ length: steps }).map((_, index) => (
                <div
                  key={index}
                  className={classNames("w-1/4", {
                    "bg-indigo-500": index < currentStep,
                    "bg-gray-200": index >= currentStep,
                  })}
                >
                  {index < currentStep && <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-indigo-600">{index + 1}</span>}
                </div>
              ))}
            </div>
            <div className="flex mb-2 items-center justify-between">
              <div className="text-xs font-semibold inline-block text-indigo-600">
                Step {currentStep} of {steps}
              </div>
            </div>
          <div>
            <div className="flex flex-col pt-1" style={{ width: `${barWidth}%` }}></div>
          </div>
          </div> */}
            <div className=" w-[504px] z-[2] relative  pt-[37px] pl-[32px] h-[890px] bg-white rounded-[16px] ">
              <div>
                <h3 className="text-[44px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Get Started</h3>
                <p className=" tracking-[0.88px] w-[440px] mt-[37px] text-[#282828] font-[300] text-[20px] text-left opacity-[1] ">Kindly provide the details below to create a Broker Profile</p>
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="CAC RC No" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Broker ID (RB No)" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Broker Name" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="License Issue Date" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="License Expiry Date" />

                <div className="w-[440px] mt-[43.25px] flex justify-between items-center">
                  <Link onClick={() => window.scroll(0, 0)} to="/">
                    <button className="w-[204px] h-[52px] text-[#50B848] text-[16px] tracking-[0.26px] font-[600]  border-[1px] border-[#50B848] opacity-[1] rounded-[8px] ">Previous</button>
                  </Link>
                  <Link to="/brokeradditionalinfo">
                    <button className="w-[204px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600]  bg-[#50B848] opacity-[1] rounded-[8px] ">Next</button>
                  </Link>
                </div>

                <p className=" mt-[24px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
                  Already have an account?{" "}
                  <Link onClick={() => window.scroll(0, 0)} to="/login">
                    <span className="text-[#009677]">Sign In </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className=" z-[1] absolute top-[57rem] right-[30rem] " src={leaf} alt="leaf" />

        <div className=" pl-[70px] tracking-[0.38px] opacity-[1] mt-[150px] pb-[100px]">
          <p className=" text-[24px] font-normal text-[#2E3D56CC]">
            Having troubles? <span className="text-[#009677] font-bold underline ">Contact Support</span>
          </p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="lg:hidden mobile:block ">
        <div className=" w-[100%] p-[90px] flex justify-center items-center ">
          {/* Welcome Note */}
          <div className=" hidden  w-[45%]  ">
            <h1 className="text-[44px] w-[600px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Guaranteed Insurance for individuals and Organization</h1>
            <p className=" tracking-[1.06px] mt-[32px] text-[#808285] font-normal text-[24px] text-left opacity-[1] ">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
            <div className=" mt-[45px] h-[500px] ">
              <form>
                {options.map((option) => (
                  <label key={option.id} className="flex mb-[35px]  items-center space-x-2">
                    <input type="radio" name="radioGroup" value={option.id} className="appearance-none h-[32px] w-[32px] opacity-[1] border border-[#8DC63F] rounded-full checked:bg-[#009677] checked:border-transparent focus:outline-none" />
                    <span className="text-[20px] pl-[10px] font-normal text-[#2E3D56CC] ">{option.label}</span>
                  </label>
                ))}
              </form>
            </div>
          </div>
          {/* Form starts */}
          <div className=" w-[45%]">
            <div className=" w-[210px]  ml-[-20px] mb-[32px] h-[47px] ">
              <img className="flex justify-center items-center" src={logo} alt="logo" />
            </div>
            <div className=" w-[504px] z-[2] relative  pt-[37px] pl-[32px] h-[890px] bg-white rounded-[16px] ">
              <div>
                <h3 className="text-[44px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Get Started</h3>
                <p className=" tracking-[0.88px] w-[440px] mt-[37px] text-[#282828] font-[300] text-[20px] text-left opacity-[1] ">Kindly provide the details below to create a Broker Profile</p>
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="CAC RC No" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Broker ID (RB No)" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Broker Name" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="License Issue Date" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="License Expiry Date" />

                <div className="w-[440px] mt-[43.25px] flex justify-between items-center">
                  <Link onClick={() => window.scroll(0, 0)} to="/">
                    <button className="w-[204px] h-[52px] text-[#50B848] text-[16px] tracking-[0.26px] font-[600]  border-[1px] border-[#50B848] opacity-[1] rounded-[8px] ">Previous</button>
                  </Link>
                  <Link to="/brokeradditionalinfo">
                    <button className="w-[204px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600]  bg-[#50B848] opacity-[1] rounded-[8px] ">Next</button>
                  </Link>
                </div>

                <p className=" mt-[24px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
                  Already have an account?{" "}
                  <Link onClick={() => window.scroll(0, 0)} to="/login">
                    <span className="text-[#009677]">Sign In </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <img className=" z-[1] absolute  top-[59rem] right-[37rem] " src={leaf} alt="leaf" />
        </div>
        <div className=" pl-[70px] tracking-[0.38px] opacity-[1] mt-[150px] pb-[100px]">
          <p className=" text-[24px] text-center font-normal text-[#2E3D56CC]">
            Having troubles? <span className="text-[#009677] font-bold underline ">Contact Support</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default BrokerDetails;

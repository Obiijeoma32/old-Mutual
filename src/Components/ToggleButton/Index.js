import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-[#F6F7F9] w-full h-[80px] flex justify-start pl-[20px] items-center ">
      <div className="flex  items-center">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            {/* Hidden input */}
            <input type="checkbox" id="toggle" className="sr-only" checked={isChecked} onChange={handleToggle} />
            {/* Visual switch */}
            <div className={`block  w-10 h-6 rounded-full ${isChecked ? "bg-[#9CCD65]" : "bg-[#EEEEEE]"}`} />
            {/* Switch ball */}
            <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform ${isChecked ? "translate-x-full " : "translate-x-0 "}`} />
          </div>
          {/* Switch label */}

          <div className=" items-center ml-6  flex justify-between text-[#6A6A6A] text-[20px] font-normal w-[290px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.01188 5V4.25H2.41764L2.28175 4.82849L3.01188 5ZM11.9978 22.0001L11.8404 22.7334L11.9978 22.7672L12.1552 22.7334L11.9978 22.0001ZM20.9838 5L21.7139 4.82849L21.578 4.25H20.9838V5ZM11.9978 1.25C10.0309 1.25 8.49636 2.10185 7.14156 2.84177C5.74911 3.60226 4.5376 4.25 3.01188 4.25V5.75C4.97407 5.75 6.50651 4.89774 7.86055 4.15823C9.25224 3.39815 10.4667 2.75 11.9978 2.75V1.25ZM12.1552 21.2668C5.66823 19.8748 1.81818 13.3613 3.74201 5.17151L2.28175 4.82849C0.212173 13.6387 4.3474 21.1255 11.8404 22.7334L12.1552 21.2668ZM11.9978 2.75C13.5362 2.75 14.7521 3.39851 16.1416 4.15809C17.494 4.89737 19.0232 5.75 20.9838 5.75V4.25C19.4604 4.25 18.2527 3.60263 16.8611 2.84191C15.5066 2.10149 13.9715 1.25 11.9978 1.25V2.75ZM12.1552 22.7334C19.6482 21.1255 23.7835 13.6387 21.7139 4.82849L20.2537 5.17151C22.1775 13.3613 18.3274 19.8748 11.8404 21.2668L12.1552 22.7334Z"
                fill="currentColor"
              />
              <path d="M13.3662 14L12.4562 12.572L11.5812 14H10.9162L12.1552 12.096L10.9162 10.164H11.6372L12.5472 11.585L13.4152 10.164H14.0802L12.8482 12.061L14.0872 14H13.3662Z" fill="currentColor" />
            </svg>
            <h3>Police Report available </h3>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11.992 17H12.001" stroke="currentColor" strokWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;

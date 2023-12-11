import { useState } from "react";
import SideMenu from "../SideMenu";

function CreditLife() {
  const [isOpen, setIsOpen] = useState(false);
  const [creditIndividual, setCreditIndividual] = useState(true);
  const [creditCorporate, setCreditCorporate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCreditIndividual = () => {
    setCreditIndividual(true);
    setCreditCorporate(false);
  };
  const handleCreditCorporate = () => {
    setCreditCorporate(true);
    setCreditIndividual(false);
  };
  return (
    <>
      <SideMenu />
      <div className=" sm:pl-[30px] lg:pl-[23rem] h-[150vh]   w-[100%]">
        {/* notification container */}
        <div className="flex w-[100%] pr-[10px]  h-[50px] pt-[40px] justify-end items-center">
          <div className=" justify-between flex items-center">
            <div className="flex w-[50px]  justify-between items-center">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.10831 12.8078C1.9311 13.9695 2.72338 14.7758 3.69342 15.1777C7.41238 16.7183 12.5877 16.7183 16.3066 15.1777C17.2767 14.7758 18.069 13.9695 17.8918 12.8078C17.7829 12.0939 17.2444 11.4994 16.8454 10.9189C16.3228 10.1493 16.2709 9.30967 16.2708 8.4165C16.2708 4.96472 13.4633 2.1665 10 2.1665C6.53682 2.1665 3.72932 4.96472 3.72932 8.4165C3.72923 9.30967 3.67731 10.1493 3.15472 10.9189C2.75574 11.4994 2.21722 12.0939 2.10831 12.8078Z"
                  stroke="#333333"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6.66663 16.3335C7.0487 17.7712 8.39621 18.8335 9.99996 18.8335C11.6037 18.8335 12.9512 17.7712 13.3333 16.3335" stroke="#333333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="w-[24px] h-[24px] rounded-[30px] bg-[#50B848] flex justify-center items-center text-center ">
                <h3 className=" text-[#fff] text-[10px] ">1</h3>
              </div>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={isOpen ? "flex w-[150px] bg-[#D1D7E1] h-[40px] mr-[30px] rounded-[20px] pl-[13px] cursor-pointer ml-[10px] justify-between items-center" : "flex w-[170px] cursor-pointer ml-[23.5px] justify-between items-center"}
            >
              <div className="flex justify-between items-center">
                <h3 className=" opacity-[1] text-[16px] pr-[24px] font-semibold text-[#1a1a1a] ">Valentine</h3>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" stroke="#808285" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Page Title */}
        <div className="mt-[10px]">
          <h3 className="text-[16px] font-medium text-[#808285] opacicty-[1] tracking-[0.26px] ">
            Dashboard /<span className="text-[20px] text-[#009677] tracking-[0.32px] "> Credit Life Insurance</span>
          </h3>
        </div>
        <div className=" mt-[54px] w-[75%]">
          <div className="text-left">
            <h3 className="text-[28px] font-[600] text-[#1a1a1a] tracking-[0.56px]  ">Credit Life Insurance</h3>
            <p className="text-[18px] font-normal mt-[8px] text-[#1A1A1A] ">Quotes and Booking for Credit Life Insurance</p>
          </div>
        </div>
        <div className=" w-[95%] h-[700px] pl-[25px] pt-[37px] rounded-[8px] mt-[44px] bg-white ">
          {/* Credit Life Individual and Corporate Insurance Header Container */}
          <div className="w-[98%]  border-b-[#DFDEDE]  border-b-[2px] rounded-[8] ">
            <div className=" w-[380px] flex justify-between items-center  ">
              <h3
                onClick={handleCreditIndividual}
                className={`pb-[10px] 
 ${
   creditIndividual
     ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
     : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
 }`}
              >
                Credit Life (individual)
              </h3>
              <h3
                onClick={handleCreditCorporate}
                className={`pb-[10px]  ${
                  creditCorporate
                    ? "text-[16px] text-[#009677] mb-[-2px] border-b-[2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
                    : "text-[16px] cursor-pointer hover:text-[#2778C3] font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
                }`}
              >
                Credit Life(Corporate)
              </h3>
            </div>
          </div>
          {/* Credit Life Individual and Corporate Insurance Table */}
          {creditIndividual && (
            <div className="w-[98%] h-[450px] rounded-[8px] mt-[50px] bg-[#F1F2F2] ">
              <table className="  w-[100%] h-[450px] border-[1px] rounded-[8px] border-[#E4E7ED] justify-between items-center ">
                <thead className=" border-b-[1px] pb-[10px] border-b-[#E4E7ED]">
                  <tr className="text-[18px] text-left font-[400px] text-[#575757] tracking-[0.36px] ">
                    <th className=" w-[43%] pt-[30px] pl-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">About This Plan</th>
                    <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Premium</th>
                    <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Rate</th>
                    <th className="  pt-[30px] pl-[10px] whitespace-nowrap w-[18%] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Cover Term</th>
                    <th className="  pt-[30px] pl-[10px]  pb-[10px]    ">Action</th>
                  </tr>
                </thead>
                <tbody className=" text-[16px] font-normal  text-[#575757] bg-[#FAFAFA] w-full h-[355px]  ">
                  <tr className="  ">
                    <td className="w-[30%] pt-[20px] border-r-[1px] pr-[15px] pl-[15px]  border-r-[#E4E7ED] ">
                      Credit life insurance is insurance that provides security should you be unable to repay your debt due to retrenchment, disability or death.
                      <br />
                      <span className="text-[#1A987B]">
                        The credit life insurance policy will pay the debt either in part or in full to the bank. It protects both you and your loved ones from the strain of having to service debt when life happens.Whether it’s a personal loan, a
                        revolving loan, a credit card or a student loan, you are likely paying for credit life insurance as part of your debt repayment.
                      </span>
                    </td>
                    <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">NGN0- NGN70,000,000 </td>
                    <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">0.0 - 0.5% </td>
                    <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">(Custom)</td>
                    <td className="pl-[10px] pr-[10px]">
                      <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className=" w-[90px] border-[1px] border-[#9CCD65] hover:bg-[#9CCD65] text-center h-[60px] rounded-[4px]  ">
                        GET A QUOTE
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {creditCorporate && (
            <div className="w-[98%] h-[450px] rounded-[8px] mt-[50px] bg-[#F1F2F2] ">
              <table className="  w-[100%] h-[450px] border-[1px] rounded-[8px] border-[#E4E7ED] justify-between items-center ">
                <thead className=" border-b-[1px] pb-[10px] border-b-[#E4E7ED]">
                  <tr className="text-[18px] text-left font-[400px] text-[#575757] tracking-[0.36px] ">
                    <th className=" w-[43%] pt-[30px] pl-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">About This Plan</th>
                    <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED] w-[20%]   ">Loan Amount Cover</th>
                    <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED] pr-[10px]  ">Rate</th>
                    <th className="  pt-[30px] pl-[10px] whitespace-nowrap w-[18%] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Cover Term</th>
                    <th className="  pt-[30px] pl-[10px]  pb-[10px]    ">Action</th>
                  </tr>
                </thead>
                <tbody className=" text-[16px] font-normal  text-[#575757] bg-[#FAFAFA] w-full h-[355px]  ">
                  <tr className="  ">
                    <td className="w-[30%] pt-[20px] border-r-[1px] pr-[15px] pl-[15px]  border-r-[#E4E7ED] ">
                      Credit life insurance is a type of life insurance policy designed to pay off a borrower's outstanding debts if the borrower dies.
                      <br />
                      <span className="text-[#1A987B]">Credit life policies feature a term that corresponds with the loan maturity and decreasing death benefits that correspond with the reduced debt outstanding over time </span>
                    </td>
                    <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">NGN0- NGN70,000,000 </td>
                    <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED] ">0.0% - 0.1% </td>
                    <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">(Custom)</td>
                    <td className="pl-[10px] pr-[10px]">
                      <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className=" w-[90px] border-[1px] border-[#9CCD65] hover:bg-[#9CCD65] text-center h-[60px] rounded-[4px]  ">
                        GET A QUOTE
                      </button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {/* Book Box */}
      {isHovered && (
        <div className=" absolute left-[90.7%]  w-[70px] text-center h-[40px] top-[78%] transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white rounded shadow-md">
          <div className="left-[35px] absolute   bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-800 border-r border-b border-indigo-500"></div> Book
        </div>
      )}
      {/* Dropdown menu bar */}
      {isOpen && (
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
      )}
    </>
  );
}

export default CreditLife;

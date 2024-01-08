import { useState } from "react";
import SideMenu from "../SideMenu";
import { Link } from "react-router-dom";
import FirstIcon from "../QuickQuoteModal/FirstIcon";
import SecondIcon from "../QuickQuoteModal/SecondIcon";
import ThirdIcon from "../QuickQuoteModal/ThirdIcon";
import FourthIcon from "../QuickQuoteModal/FourthIcon";
import FifthIcon from "../QuickQuoteModal/FifthIcon";
import DropDown from "../ProfileDropdown/DropDown";
import GetQuoteSelect from "../Select Inputs/GetQuoteSelect";

export default function IndividualGetQuote() {
  const [isOpen, setIsOpen] = useState(false);
  const [quickquotes, setQuickQuotes] = useState(false);
  const [firstIcon, setFirstIcon] = useState(true);
  const [secondIcon, setSecondIcon] = useState(false);
  const [thirdIcon, setThirdIcon] = useState(false);
  const [fourthIcon, setFourthIcon] = useState(false);
  const [fifthIcon, setFifthIcon] = useState(false);

  // const [selectedOption, setSelectedOption] = useState(null);
  const motorInsurance = () => {
    setFirstIcon(true);
    setSecondIcon(false);
    setThirdIcon(false);
    setFourthIcon(false);
    setFifthIcon(false);
  };
  const marineInsurance = () => {
    setFirstIcon(false);
    setSecondIcon(true);
    setThirdIcon(false);
    setFourthIcon(false);
    setFifthIcon(false);
  };
  const fireInsurance = () => {
    setFirstIcon(false);
    setSecondIcon(false);
    setThirdIcon(true);
    setFourthIcon(false);
    setFifthIcon(false);
  };
  const creditLifeInsurance = () => {
    setFirstIcon(false);
    setSecondIcon(false);
    setThirdIcon(false);
    setFourthIcon(true);
    setFifthIcon(false);
  };
  const groupLifeInsurance = () => {
    setFirstIcon(false);
    setSecondIcon(false);
    setThirdIcon(false);
    setFourthIcon(false);
    setFifthIcon(true);
  };
  const handleQuickQuotes = () => {
    setQuickQuotes(false);
  };
  const title = [
    { value: "Mr", label: "Mr" },
    { value: "Dr", label: "Dr" },
    { value: "Miss", label: "Miss" },
    { value: "Mrs", label: "Mrs" },
    { value: "Others", label: "Others" },
    { value: "Sir", label: "Sir" },
    { value: "Master", label: "Master" },
    { value: "Chief", label: "Chief" },
  ];
  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const maritalStatus = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widowed", label: "Widowed" },
  ];
  const country = [
    { label: "Afghanistan", value: "Afghanistan" },
    { label: "Albania", value: "Albania" },
    { label: "Algeria", value: "Algeria" },
    { label: "Zambia", value: "Zambia" },
    { label: "Zimbabwe", value: "Zimbabwe" },
  ];
  const idType = [
    { value: "International Passport", label: "International Passport" },
    { value: "National ID Card", label: "National ID Card" },
    { value: "Drivers License", label: "Drivers License" },
    { value: "Voters Card", label: "Voters Card" },
    { value: "E-Tax", label: "E-Tax" },
  ];
  const state = [
    { label: "Abia", value: "abia" },
    { label: "Adamawa", value: "adamawa" },
    { label: "Akwa Ibom", value: "akwa_ibom" },
    { label: "Anambra", value: "anambra" },
    { label: "Bauchi", value: "bauchi" },
    { label: "Bayelsa", value: "bayelsa" },
    { label: "Benue", value: "benue" },
    { label: "Borno", value: "borno" },
    { label: "Cross River", value: "cross_river" },
    { label: "Delta", value: "delta" },
    { label: "Ebonyi", value: "ebonyi" },
    { label: "Edo", value: "edo" },
    { label: "Ekiti", value: "ekiti" },
    { label: "Enugu", value: "enugu" },
    { label: "Gombe", value: "gombe" },
    { label: "Imo", value: "imo" },
    { label: "Jigawa", value: "jigawa" },
    { label: "Kaduna", value: "kaduna" },
    { label: "Kano", value: "kano" },
    { label: "Katsina", value: "katsina" },
    { label: "Kebbi", value: "kebbi" },
    { label: "Kogi", value: "kogi" },
    { label: "Kwara", value: "kwara" },
    { label: "Lagos", value: "lagos" },
    { label: "Nasarawa", value: "nasarawa" },
    { label: "Niger", value: "niger" },
    { label: "Ogun", value: "ogun" },
    { label: "Ondo", value: "ondo" },
    { label: "Osun", value: "osun" },
    { label: "Oyo", value: "oyo" },
    { label: "Plateau", value: "plateau" },
    { label: "Rivers", value: "rivers" },
    { label: "Sokoto", value: "sokoto" },
    { label: "Taraba", value: "taraba" },
    { label: "Yobe", value: "yobe" },
    { label: "Zamfara", value: "zamfara" },
    { label: "Federal Capital Territory (FCT)", value: "fct" },
  ];
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
            Dashboard <Link to="/creditLife">/ Credit Life Insurance/</Link>
            <span className="text-[20px] text-[#009677] tracking-[0.32px] ">Get Quote</span>
          </h3>
        </div>
        <div className=" mt-[54px] w-[75%]">
          <div className="text-left">
            <h3 className="text-[28px] font-[600] text-[#1a1a1a] tracking-[0.56px]  ">Credit Life Individual</h3>
            <p className="text-[18px] font-normal mt-[8px] text-[#1A1A1A] ">Fill in Applicant Information</p>
          </div>
        </div>
        <button className=" mt-[40px]" onClick={() => setQuickQuotes(true)}>
          <div className="w-[240px] flex justify-center items-center opacity-[1] h-[42px] rounded-[4px] bg-[#50B848] ">
            <p className=" text-[18px] opacity-[1] text-center font-normal flex justify-center items-center text-[#fff] tracking-[0.51px] ">
              <span className="text-[20px] ">
                <b className=" font-bold mr-1 text-[30px] ">+</b>
              </span>
              {"  "}Quick Quotes
            </p>
          </div>
        </button>
        <div className=" w-[95%] h-fit pb-[40px] pl-[25px] pt-[37px] rounded-[8px] mt-[34px] bg-white ">
          {/* Title */}
          <div className=" w-[90%] border-b-[1px] border-b-[#E5E7ED] flex justify-start pb-[20px] pl-[20px] items-center ">
            <div className="  text-[#171717] text-[20px] font-semibold ">
              <h3>Loan Applicant Details</h3>
            </div>
          </div>
          <form className=" mt-6 w-[95%] ">
            <div className="flex items-center justify-between">
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pt-[5px] pb-[10px]  rounded w-[250px] flex flex-col justify-between h-[60px] ">
                <label htmlFor="">First Name</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="text" />
              </div>
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pt-[5px] pb-[10px]  rounded w-[250px] flex flex-col justify-between h-[60px] ">
                <label htmlFor="">Last Name</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="text" />
              </div>
              <GetQuoteSelect placeholder={`Title`} label={title} />
            </div>
            <div className="flex mt-7 items-center justify-between">
              <GetQuoteSelect placeholder={`Marital Status`} label={maritalStatus} />
              <GetQuoteSelect placeholder={`Gender`} label={gender} />
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pt-[5px] pb-[10px]  rounded w-[250px] flex flex-col justify-between h-[60px] ">
                <label htmlFor="">Date of Birth</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="text" />
              </div>
            </div>
            <div className="flex mt-7 items-center justify-between">
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pt-[5px] pb-[10px]  rounded w-[250px] flex flex-col justify-between h-[60px] ">
                <label htmlFor="">ID Number</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="number" />
              </div>
              <GetQuoteSelect placeholder={`ID Type`} label={idType} />
              <GetQuoteSelect placeholder={`Nationality`} label={country} />
            </div>
            <div className="flex mt-7 items-center justify-between">
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pt-[5px] pb-[10px]  rounded w-[250px] flex flex-col justify-between h-[60px] ">
                <label htmlFor="">Employer</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="text" />
              </div>
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pt-[5px] pb-[10px]  rounded w-[250px] flex flex-col justify-between h-[60px] ">
                <label htmlFor="">Occupation</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="text" />
              </div>
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pt-[5px] pb-[10px]  rounded w-[250px] flex flex-col justify-between h-[60px] ">
                <label htmlFor="">Income Source</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="text" />
              </div>
            </div>
          </form>
          {/* Title Residential Information */}
          <div className=" w-[90%] mt-[40px] border-b-[1px] border-b-[#E5E7ED] flex justify-start pb-[20px] pl-[20px] items-center ">
            <div className="  text-[#171717] text-[20px] font-semibold ">
              <h3>Residential Information</h3>
            </div>
          </div>
          <form className=" mt-6 w-[95%] ">
            <div className="flex items-center w-full justify-between">
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pt-[5px] pb-[10px]  rounded w-5/12 flex flex-col justify-between h-[60px] ">
                <label htmlFor="">Address 1</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="text" />
              </div>
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pt-[5px] pb-[10px]  rounded w-5/12 flex flex-col justify-between h-[60px] ">
                <label htmlFor="">Address 2</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="text" />
              </div>
            </div>
            <div className="flex mt-7 items-center justify-between">
              <GetQuoteSelect placeholder={`ID Type`} label={idType} />
              <GetQuoteSelect placeholder={`Nationality`} label={country} />
              <GetQuoteSelect placeholder={`State`} label={state} />
            </div>
          </form>
        </div>
      </div>
      {/* Quick Quotes Button */}
      {quickquotes && (
        <div className=" top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-[100vh]  ">
          <div className="w-[650px] h-fit rounded-[8px]   bg-white opacity-[1]  ">
            <div className=" w-[100%] p-[20px] h-[70px] flex justify-between items-center bg-[#039677] text-[20px]  text-[#fff] ">
              <h3 className=" font-normal ">Insurance Quotes</h3>
              <svg onClick={() => setQuickQuotes(false)} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9991 16L8 8M8.00085 16L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="w-[93%]  mx-[20px] border-b-[#DFDEDE] pl-[10px] mt-[40px] border-b-[1.5px] rounded-[8] ">
              <div className=" w-[250px] text-[#575757] pb-[20px] flex justify-between items-center  ">
                <button onClick={motorInsurance} className={`${firstIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                  {" "}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button onClick={marineInsurance} className={`${secondIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 11.1249C0.99985 11.9419 1.25789 12.738 1.73727 13.3995C2.21664 14.061 2.89282 14.5541 3.66921 14.8083C4.44559 15.0625 5.28245 15.0648 6.06024 14.8149C6.83802 14.5651 7.51694 14.0758 8 13.4169C8.48306 14.0758 9.16197 14.5651 9.93976 14.8149C10.7175 15.0648 11.5544 15.0625 12.3308 14.8083C13.1072 14.5541 13.7834 14.061 14.2627 13.3995C14.7421 12.738 15.0002 11.9419 15 11.1249V7.00194L13.72 8.28194L12.23 9.76994C12.0893 9.91064 12.0103 10.1015 12.0103 10.3004C12.0103 10.4994 12.0893 10.6902 12.23 10.8309C12.3707 10.9716 12.5615 11.0507 12.7605 11.0507C12.9595 11.0507 13.1503 10.9716 13.291 10.8309L13.499 10.6229V11.1249C13.499 11.4368 13.4376 11.7457 13.3182 12.0338C13.1989 12.322 13.0239 12.5838 12.8034 12.8043C12.5828 13.0249 12.321 13.1998 12.0329 13.3192C11.7447 13.4385 11.4359 13.4999 11.124 13.4999C10.8121 13.4999 10.5033 13.4385 10.2151 13.3192C9.92698 13.1998 9.66516 13.0249 9.44462 12.8043C9.22408 12.5838 9.04914 12.322 8.92979 12.0338C8.81043 11.7457 8.749 11.4368 8.749 11.1249V5.88494C9.31906 5.70575 9.80612 5.32837 10.122 4.82112C10.4379 4.31388 10.5617 3.7103 10.4711 3.11966C10.3804 2.52901 10.0813 1.99034 9.62783 1.60117C9.17437 1.212 8.59656 0.998047 7.999 0.998047C7.40144 0.998047 6.82363 1.212 6.37017 1.60117C5.91672 1.99034 5.61759 2.52901 5.52694 3.11966C5.4363 3.7103 5.56012 4.31388 5.876 4.82112C6.19188 5.32837 6.67894 5.70575 7.249 5.88494V11.1249C7.249 11.7548 6.99878 12.3589 6.55338 12.8043C6.10798 13.2497 5.50389 13.4999 4.874 13.4999C4.24411 13.4999 3.64002 13.2497 3.19462 12.8043C2.74922 12.3589 2.499 11.7548 2.499 11.1249V10.6229L2.707 10.8309C2.77566 10.9046 2.85846 10.9637 2.95046 11.0047C3.04246 11.0457 3.14177 11.0678 3.24248 11.0695C3.34318 11.0713 3.44321 11.0528 3.5366 11.0151C3.62999 10.9773 3.71482 10.9212 3.78604 10.85C3.85726 10.7788 3.9134 10.6939 3.95112 10.6005C3.98884 10.5072 4.00737 10.4071 4.00559 10.3064C4.00381 10.2057 3.98177 10.1064 3.94078 10.0144C3.89979 9.9224 3.84069 9.8396 3.767 9.77094L2.28 8.28094L1 7.00194V11.1249ZM9 3.49994C9 3.23473 8.89464 2.98037 8.70711 2.79284C8.51957 2.6053 8.26522 2.49994 8 2.49994C7.73478 2.49994 7.48043 2.6053 7.29289 2.79284C7.10536 2.98037 7 3.23473 7 3.49994C7 3.76516 7.10536 4.01951 7.29289 4.20705C7.48043 4.39459 7.73478 4.49994 8 4.49994C8.26522 4.49994 8.51957 4.39459 8.70711 4.20705C8.89464 4.01951 9 3.76516 9 3.49994Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button onClick={fireInsurance} className={`${thirdIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24.832 16.969C24.56 16.322 24.25 15.589 23.949 14.684C23.159 12.315 25.683 9.731 25.707 9.707L24.293 8.293C24.153 8.433 20.87 11.771 22.051 15.316C22.377 16.294 22.703 17.066 22.989 17.746C23.6564 19.0646 24.0028 20.5222 24 22C23.8828 23.1912 23.4255 24.3235 22.6826 25.262C21.9396 26.2005 20.9425 26.9055 19.81 27.293C20.1678 25.8907 20.1624 24.4203 19.7945 23.0207C19.4266 21.621 18.7081 20.3381 17.707 19.293L16.663 18.249L16.081 19.606C14.245 23.89 12.06 25.76 10.775 26.54C9.98615 26.0569 9.32326 25.3934 8.84083 24.6041C8.3584 23.8149 8.07022 22.9224 8 22C8.06898 20.7412 8.38463 19.5081 8.929 18.371C9.5746 17.0002 9.93878 15.5139 10 14V12.222C10.874 12.582 12 13.525 12 16V18.603L13.743 16.669C16.855 13.215 16.206 9.102 14.949 6.361C15.9045 6.6795 16.725 7.31027 17.2784 8.15176C17.8319 8.99325 18.086 9.99651 18 11H20C20 5.463 15.421 4 13 4H11L12.2 5.599C12.337 5.784 15.062 9.526 13.553 13.287C13.2172 12.3419 12.6018 11.5213 11.7886 10.9342C10.9754 10.3471 10.0028 10.0213 9 10H8V14C7.93102 15.2588 7.61537 16.4919 7.071 17.629C6.4254 18.9998 6.06122 20.4861 6 22C6 25.848 9.823 30 16 30C22.177 30 26 25.848 26 22C26.0015 20.2556 25.6019 18.5343 24.832 16.969ZM12.835 27.526C14.6797 25.999 16.1698 24.0888 17.202 21.928C17.7531 22.8178 18.0661 23.8343 18.1111 24.8799C18.1561 25.9255 17.9316 26.9652 17.459 27.899C16.9754 27.9641 16.488 27.9978 16 28C14.9268 28.0074 13.859 27.8475 12.835 27.526Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button onClick={creditLifeInsurance} className={`${fourthIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                  {" "}
                  <svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9743 4.75781H19.458C21.9084 4.75779 23.8492 4.75777 25.3681 4.962C26.9313 5.17216 28.1967 5.61499 29.1945 6.6128C30.1923 7.61063 30.6351 8.87589 30.8453 10.4391C30.9659 11.3363 31.0153 12.3806 31.0355 13.5902C31.0447 13.6447 31.0495 13.7007 31.0495 13.7578C31.0495 13.8049 31.0463 13.851 31.04 13.8963C31.0495 14.6506 31.0495 15.4669 31.0495 16.3493V16.4997C31.0495 18.9501 31.0495 20.8909 30.8453 22.4098C30.6351 23.973 30.1923 25.2383 29.1945 26.2362C28.1967 27.2339 26.9313 27.6767 25.3681 27.887C23.8492 28.0911 21.9084 28.0911 19.458 28.0911H13.9743C11.5239 28.0911 9.58307 28.0911 8.06412 27.887C6.50089 27.6767 5.23563 27.2339 4.2378 26.2362C3.23999 25.2383 2.79716 23.973 2.587 22.4098C2.38277 20.8909 2.38279 18.9501 2.38281 16.4997V16.3493C2.3828 15.4669 2.3828 14.6506 2.39233 13.8963C2.38605 13.851 2.38281 13.8047 2.38281 13.7578C2.38281 13.7007 2.3876 13.6447 2.3968 13.5902C2.417 12.3806 2.46637 11.3363 2.587 10.4391C2.79716 8.87589 3.23999 7.61063 4.2378 6.6128C5.23563 5.61499 6.50089 5.17216 8.06412 4.962C9.58307 4.75777 11.5239 4.75779 13.9743 4.75781ZM4.38547 14.7578C4.38293 15.2757 4.38281 15.8299 4.38281 16.4245C4.38281 18.9669 4.38493 20.7731 4.56916 22.1434C4.74951 23.4847 5.08773 24.2577 5.65201 24.8219C6.21629 25.3862 6.98916 25.7245 8.33061 25.9047C9.70083 26.089 11.5071 26.0911 14.0495 26.0911H19.3828C21.9252 26.0911 23.7315 26.089 25.1017 25.9047C26.4431 25.7245 27.216 25.3862 27.7803 24.8219C28.3445 24.2577 28.6828 23.4847 28.8631 22.1434C29.0473 20.7731 29.0495 18.9669 29.0495 16.4245C29.0495 15.8299 29.0493 15.2757 29.0468 14.7578H4.38547ZM29.0147 12.7578H4.41757C4.44367 11.9755 4.48931 11.2996 4.56916 10.7056C4.74951 9.36416 5.08773 8.59129 5.65201 8.02701C6.21629 7.46273 6.98916 7.12451 8.33061 6.94416C9.70083 6.75993 11.5071 6.75781 14.0495 6.75781H19.3828C21.9252 6.75781 23.7315 6.75993 25.1017 6.94416C26.4431 7.12451 27.216 7.46273 27.7803 8.02701C28.3445 8.59129 28.6828 9.36416 28.8631 10.7056C28.9429 11.2996 28.9887 11.9755 29.0147 12.7578ZM7.71615 21.7578C7.71615 21.2055 8.16387 20.7578 8.71615 20.7578H14.0495C14.6017 20.7578 15.0495 21.2055 15.0495 21.7578C15.0495 22.3101 14.6017 22.7578 14.0495 22.7578H8.71615C8.16387 22.7578 7.71615 22.3101 7.71615 21.7578ZM16.3828 21.7578C16.3828 21.2055 16.8305 20.7578 17.3828 20.7578H19.3828C19.9351 20.7578 20.3828 21.2055 20.3828 21.7578C20.3828 22.3101 19.9351 22.7578 19.3828 22.7578H17.3828C16.8305 22.7578 16.3828 22.3101 16.3828 21.7578Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button onClick={groupLifeInsurance} className={`${fifthIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                  {" "}
                  <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M30.5617 24.0718C33.0734 25.7768 34.8334 28.0868 34.8334 31.1668V36.6668H42.1667V31.1668C42.1667 27.1702 35.6217 24.8052 30.5617 24.0718ZM27.5 22.0002C31.5517 22.0002 34.8334 18.7185 34.8334 14.6668C34.8334 10.6152 31.5517 7.3335 27.5 7.3335C26.6384 7.3335 25.8317 7.51683 25.0617 7.7735C26.6393 9.72456 27.5 12.1577 27.5 14.6668C27.5 17.1759 26.6393 19.6091 25.0617 21.5602C25.8317 21.8168 26.6384 22.0002 27.5 22.0002ZM16.5 22.0002C20.5517 22.0002 23.8334 18.7185 23.8334 14.6668C23.8334 10.6152 20.5517 7.3335 16.5 7.3335C12.4484 7.3335 9.16671 10.6152 9.16671 14.6668C9.16671 18.7185 12.4484 22.0002 16.5 22.0002ZM16.5 11.0002C18.5167 11.0002 20.1667 12.6502 20.1667 14.6668C20.1667 16.6835 18.5167 18.3335 16.5 18.3335C14.4834 18.3335 12.8334 16.6835 12.8334 14.6668C12.8334 12.6502 14.4834 11.0002 16.5 11.0002ZM16.5 23.8335C11.605 23.8335 1.83337 26.2902 1.83337 31.1668V36.6668H31.1667V31.1668C31.1667 26.2902 21.395 23.8335 16.5 23.8335ZM27.5 33.0002H5.50004V31.1852C5.86671 29.8652 11.55 27.5002 16.5 27.5002C21.45 27.5002 27.1334 29.8652 27.5 31.1668V33.0002Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {firstIcon && <FirstIcon handleQuickQuotes={handleQuickQuotes} />}
            {secondIcon && <SecondIcon handleQuickQuotes={handleQuickQuotes} />}
            {thirdIcon && <ThirdIcon handleQuickQuotes={handleQuickQuotes} />}
            {fourthIcon && <FourthIcon handleQuickQuotes={handleQuickQuotes} />}
            {fifthIcon && <FifthIcon handleQuickQuotes={handleQuickQuotes} />}
          </div>
        </div>
      )}
      {/* Dropdown menu bar */}
      {isOpen && <DropDown />}
    </>
  );
}

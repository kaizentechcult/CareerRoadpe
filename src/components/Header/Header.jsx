import { Link } from "react-router-dom";
import MenuPopUp from "../Menu/MenuPopUp";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Menu from "../Menu/Menu";
import ProtoTypes from "prop-types";

// import Menu from "./Menu"; // Import the Modal component
// import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  let showHeader = false;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const params = useParams();
  console.log(params);
  const path = window.location.pathname;
  console.log(path);
  // path === "/signin" || path === "/signup" ? setshowHeader(true) : setshowHeader(false);
  path === "/fields" ? (showHeader = false) : (showHeader = true);

  return (
    <div className="relative md:static">
      <Link
        to="/fields"
        className="flex flex-col justify-center items-center p-8 gap-4 md:flex md:flex-row md:-translate-x-[20vw] md:px-20 md:py-10 md:mx-auto"
      >
        <img
          className="h-20 md:flex md:justify-center md:items-center md:h-10"
          src="logoK.svg"
          alt="logo"
        />
        <div className="text-xl font-semibold md:-translate-x-5">
          CareerRoadPe.in
        </div>
        {/* Only for desktop */}
        <div
          className={`${
            showHeader ? `hidden` : `md:flex`
          }   md:justify-between md:rounded-[2rem] md:bg-[#4F7EC3] md:h-14 md:w-fit gap-8 md:translate-x-[15vw] hidden px-4`}
        >
          <div className="md:flex md:justify-center md:items-center">
            <img
              src="/Screenshot 2024-06-22 113328.png"
              alt=""
              className="md:w-10"
            />
            <div className="text-white">Generate with AI</div>
          </div>
          <div className="md:flex md:justify-center md:items-center">
            <img src="/mentorIcon.svg" alt="" className="md:w-14" />
            <div className="text-white">Mentor Session</div>
          </div>
        </div>
        <div
          className={` ${
            showHeader ? `hidden` : `md:flex`
          } md:items-center md:space-y-7 text-white translate-x-12 absolute hidden md:flex-col md:justify-center md:translate-y-36 md:translate-x-[23vw] md:mt-20`}
        >
          <form action="">
            <input type="text" className="md:w-[40vw] md:rounded-3xl md:h-12 text-black p-4" />
            <button className="border md:w-16 md:bg-purple-700 md:p-1 md:h-12 md:rounded-3xl md:-translate-x-16 absolute">
              <img
                src=" public\search-interface-symbol.png"
                alt=""
                className="md:p-4 md:-translate-y-2 md:w-28"
              />
            </button>
          </form>
          <div className=" text-white text-[3rem] font-semibold">
            Search RoadMap
          </div>
        </div>
      </Link>
      {/* <MenuPopUp {...showHeader}/> */}
      <>
        <button
          className={`${showHeader ? `hidden` : `flex`}`}
          onClick={togglePopup}
        >
          <img
            className={`${
              showHeader ? `hidden` : `flex`
            } absolute top-2 right-2 h-10`}
            src="menu.svg"
          />
        </button>
        <Menu isOpen={isOpen} onClose={togglePopup}>
          {/* Modal content goes here */}

          <div className="container h-[15rem] w-[10rem] mx-auto flex border-black dark:border-[#ffffff] bg-gray-900 border-[2px] justify-center items-center">
            <div className="flex flex-col p-8 gap-1">
              <Link
                className="bg-gray-300 p-1 rounded-3xl hover:text-gray-900"
                to="/signin"
                onClick={togglePopup}
              >
                Sign in
              </Link>
              <br />
              <Link
                className="bg-gray-300 p-1 rounded-3xl hover:text-gray-900"
                to="/signup"
                onClick={togglePopup}
              >
                Sign up
              </Link>
              <br />
              <Link
                className="bg-gray-300 p-1 rounded-3xl hover:text-gray-900"
                to="/fields"
                onClick={togglePopup}
              >
                Home
              </Link>
            </div>
          </div>
        </Menu>
      </>
    </div>
  );
}

MenuPopUp.propTypes = {
  showHeader: ProtoTypes.bool.isRequired,
};

export default Header;

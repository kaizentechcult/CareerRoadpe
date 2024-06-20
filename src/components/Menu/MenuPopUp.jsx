import React, { useState } from "react";
import Menu from "./Menu"; // Import the Modal component
import { Link } from "react-router-dom";

function MenuPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup}>
        <img className="absolute top-2 right-2 h-10" src="menu.svg" />
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
  );
}

export default MenuPopUp;

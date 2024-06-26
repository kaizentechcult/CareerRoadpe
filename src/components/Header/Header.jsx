import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";

function Header() {
  const handleMenu = () => {
    document.querySelector(".mobMenu").classList.toggle("hidden");
    document.querySelector(".mobMenu").classList.toggle("flex");
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <div className="flex pt-4  justify-start  items-center">
        <Logo />
        <Navbar />
        {/* <div className="hidden md:flex z-10 p-4">
          <Link
            className=" bg-white hover:bg-black hover:text-white text-black rounded-full p-4"
            to="/hivesign"
          >
            log in
          </Link>
        </div> */}
      </div>
      <button onClick={handleMenu}>
        <FiMenu className="md:hidden absolute right-4 top-10 text-3xl" />
      </button>
      <Menu />
    </>
  );
}

export default Header;

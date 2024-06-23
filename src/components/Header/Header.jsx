import { SiGooglegemini } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className="flex pt-4 justify-between items-center">
      <Logo />

      <div className="md:flex absolute w-full justify-center hidden gap-6  rounded-full">
        <div className="bg-[#245399] flex rounded-full">
          <div className="p-4 flex gap-6 items-center hover:bg-blue-300 hover:text-black rounded-full">
            <TiHome className="scale-[1.5]" />
            <p className="">Home</p>
          </div>
          <div className="p-4 flex gap-6 items-center hover:bg-blue-300 hover:text-black rounded-full">
            <SiGooglegemini className="scale-[1.5]" />
            <p className="">Generate with AI</p>
          </div>
          <div className="p-4 flex gap-6 items-center  hover:bg-blue-300 hover:text-black rounded-full">
            <IoPeople className="scale-[1.5]" />
            <p className="">Mentor Session</p>
          </div>
        </div>
      </div>
      <div className=" p-4">
        <Link
          className="p-4 bg-white hover:bg-black hover:text-white text-black rounded-full "
          to="/signin"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Header;

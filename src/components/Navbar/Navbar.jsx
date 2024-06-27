import { SiGooglegemini } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="md:flex absolute w-full justify-center hidden rounded-full">
      <div className="bg-[#245399] flex rounded-full">
        <Link
          to="/fields"
          className="p-6 flex gap-3 items-center hover:bg-blue-300 hover:text-black rounded-full"
        >
          <TiHome className="scale-[1.5]" />
          <p className="">Home</p>
        </Link>
        <Link
          to="/chatbot"
          className="p-6 flex gap-3 items-center  hover:bg-blue-300 hover:text-black rounded-full"
        >
          <SiGooglegemini className="scale-[1.5]" />
          <p className="">ChatBot</p>
        </Link>
        <Link
          to="/mentor"
          className="p-6 flex gap-3 items-center  hover:bg-blue-300 hover:text-black rounded-full"
        >
          <IoPeople className="scale-[1.5]" />
          <p className="">Mentor Session</p>
        </Link>
        <Link
          to="/scholar"
          className="p-6 flex gap-3 items-center  hover:bg-blue-300 hover:text-black rounded-full"
        >
          <IoPeople className="scale-[1.5]" />
          <p className="">Scholarships</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

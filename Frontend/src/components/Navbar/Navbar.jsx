import { SiGooglegemini } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="md:flex absolute w-full justify-center hidden gap-6 rounded-full">
      <div className="bg-[#245399] flex rounded-full">
        <Link
          to="/fields"
          className="p-4 flex gap-6 items-center hover:bg-blue-300 hover:text-black rounded-full"
        >
          <TiHome className="scale-[1.5]" />
          <p className="">Home</p>
        </Link>
        <div className="p-4 flex gap-6 items-center hover:bg-blue-300 hover:text-black rounded-full">
          <SiGooglegemini className="scale-[1.5]" />
          <p className="">Generate with AI</p>
        </div>
        <Link
          to="/mentor"
          className="p-4 flex gap-6 items-center  hover:bg-blue-300 hover:text-black rounded-full"
        >
          <IoPeople className="scale-[1.5]" />
          <p className="">Mentor Session</p>
        </Link>
        <Link
          to="/scholar"
          className="p-4 flex gap-6 items-center  hover:bg-blue-300 hover:text-black rounded-full"
        >
          <IoPeople className="scale-[1.5]" />
          <p className="">Scholarships</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

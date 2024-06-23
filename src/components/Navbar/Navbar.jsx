import { SiGooglegemini } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import { TiHome } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="md:flex absolute w-full justify-center hidden gap-6 rounded-full">
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
  );
};

export default Navbar;

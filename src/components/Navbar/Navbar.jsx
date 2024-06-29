import { Link } from "react-router-dom";
import { SiGooglegemini } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { useLocation } from "react-router-dom";

const icons = [
  { path: "/fields", Icon: TiHome, text: "Home" },
  { path: "/chatbot", Icon: SiGooglegemini, text: "ChatBot" },
  { path: "/mentor", Icon: IoPeople, text: "Mentor Session" },
  { path: "/scholar", Icon: IoPeople, text: "Scholarships" },
  { path: "/articles", Icon: IoPeople, text: "Articles" },
  { path: "/hivesign", Icon: IoPeople, text: "log in" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="md:flex absolute w-full justify-end hidden rounded-full">
      <div className=" flex rounded-full">
        {icons.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`p-4 flex gap-3 items-center hover:bg-blue-900 rounded-full
                         ${
                           location.pathname === item.path ? "text-[#000] bg-blue-600" : ""
                         }`} 
          >
            <item.Icon className="scale-[1.5]" />
            <p className="">{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

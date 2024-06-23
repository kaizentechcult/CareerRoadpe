import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Menu = () => {
  const links = [
    {
      to: "/signin",
      text: "Sign in",
    },
    {
      to: "/signup",
      text: "Sign up",
    },
    {
      to: "/fields",
      text: "Fields",
    },
  ];

  const handleMenu = () => {
    document.querySelector(".mobMenu").classList.toggle("hidden");
    document.querySelector(".mobMenu").classList.toggle("flex");
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <div className="mobMenu hidden bg-[#1b1b1bcc] backdrop-blur-lg absolute h-screen w-full justify-center top-0">
      <div className="flex flex-col justify-center items-center text-[#fff] gap-12 text-2xl">
        <IoIosClose onClick={handleMenu} className="text-5xl" />
        {links.map((link) => (
          <Link key={link.to} className="" to={link.to} onClick={handleMenu}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;

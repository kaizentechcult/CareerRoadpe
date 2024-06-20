import { Link } from "react-router-dom";
import MenuPopUp from "../Menu/MenuPopUp";
function Header() {
  return (
    <div className="relative">
      <Link
        to="/fields"
        className="flex flex-col justify-center items-center p-8 gap-4"
      >
        <img className="h-20" src="logoK.svg" alt="logo" />
        <div className="text-xl font-semibold">CareerRoadPe.in</div>
      </Link>
      <MenuPopUp />
    </div>
  );
}

export default Header;

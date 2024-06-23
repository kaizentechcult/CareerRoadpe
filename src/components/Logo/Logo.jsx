import { Link } from "react-router-dom";
import logoK from "/logoK.svg";
const Logo = () => {
  return (
    <div>
      <Link to="/fields" className="flex justify-center items-center p-4">
        <img className="" src={logoK} alt="logo" />
        <div className="text-xl font-semibold">CareerRoadPe.in</div>
      </Link>
    </div>
  );
};

export default Logo;

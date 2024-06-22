import { Link } from "react-router-dom";
import MenuPopUp from "../Menu/MenuPopUp";
function Header() {
  return (
    <div className="relative md:static">
      <Link
        to="/fields"
        className="flex flex-col justify-center items-center p-8 gap-4 md:flex md:flex-row md:-translate-x-[20vw] md:px-20 md:py-10 md:mx-auto"
      >
        <img className="h-20 md:flex md:justify-center md:items-center md:h-10" src="logoK.svg" alt="logo" />
        <div className="text-xl font-semibold md:-translate-x-5">CareerRoadPe.in</div>
        {/* Only for desktop */}
        <div className="md:flex md:justify-around md:rounded-[2rem] md:bg-[#4F7EC3] md:h-14 md:w-[35vw] md:px-7 md:translate-x-[15vw] hidden">
          <div className="md:flex md:justify-center md:items-center">
            <img src="./public\Screenshot 2024-06-22 113328.png" alt="" class="md:w-10" />
            <div class="text-white">Generate with AI</div>
          </div>
          <div className="md:flex md:justify-center md:items-center">
            <img src="public\mentorIcon.svg" alt="" class="md:w-14" />
            <div class="text-white">Mentor Session</div>
          </div>
        </div>
        <div className=" md:flex-col md:items-center md:space-y-7 text-white translate-x-12 absolute hidden md:flex md:justify-center md:translate-y-36 md:translate-x-[23vw] md:mt-20">
          <form action="">
            <input type="text" class="md:w-[40vw] md:rounded-3xl md:h-12"/>
            <button class="border md:w-16 md:bg-purple-700 md:p-1 md:h-12 md:rounded-3xl md:-translate-x-16 absolute"><img src=" public\search-interface-symbol.png" alt="" class="md:p-4 md:-translate-y-2 md:w-28" /></button>
          </form>
          <div className=" text-white text-[3rem] font-semibold">Search RoadMap</div>
        </div>
      </Link >
      <MenuPopUp />
    </div>
  );
}

export default Header;

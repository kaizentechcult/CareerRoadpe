import { Link } from "react-router-dom";
import ProtoTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";

const Scholarship = ({ Text }) => {
  return (
    <>
      <Link
        to={`/roadmap/`}
        className="flex card-shadow bg-[#212020] py-4 px-8 rounded-xl justify-center items-center w-full"
      >
        <img className="h-10" src="bookmark.svg" />
        <p className="w-full px-3">{Text}</p>
        <IoIosArrowForward className="text-3xl" />
      </Link>
    </>
  );
};

Scholarship.propTypes = {
  Text: ProtoTypes.string,
};

export default Scholarship;

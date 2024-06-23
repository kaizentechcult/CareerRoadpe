import { Link } from "react-router-dom";
import ProtoTypes from "prop-types";

function FieldOption({ data }) {
  return (
    <>
      <Link
        to={`/roadmap/${data.id}`}
        className="flex bg-[#212020] py-4 px-8 rounded-full justify-center items-center w-full"
      >
        <img className="h-10" src="bookmark.svg" />
        <p className="w-full px-3">{data.title}</p>
      </Link>
    </>
  );
}
FieldOption.propTypes = {
  data: ProtoTypes.object.isRequired,
};

export default FieldOption;

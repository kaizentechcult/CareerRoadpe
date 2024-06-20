import React from "react";
import { Link } from "react-router-dom";
function FieldOption({ data }) {
  //   console.log(data);
  return (
    <>
      <Link to={`/roadmap/${data.title}`}>
        <div className="flex relative bg-gray-900 px-5 py-3 rounded-lg">
          <img
            className="absolute top-1 left-[4px] h-[40px] w-[20px]"
            src="bookmark.svg"
          />
          <p className="px-3">{data.title}</p>
        </div>
      </Link>
    </>
  );
}

export default FieldOption;

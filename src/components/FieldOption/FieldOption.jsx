import React from "react";
import { Link } from "react-router-dom";
function FieldOption({ data }) {
  console.log(data);
  return (
    <>
      <Link to={`/roadmap/${data}`}>
        <div>this is the option</div>
      </Link>
    </>
  );
}

export default FieldOption;

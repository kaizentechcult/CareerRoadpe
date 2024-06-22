import ProtoTypes from "prop-types";
import { useParams } from "react-router-dom";
function Roadmap({ data }) {
  const { id } = useParams();

  console.log("data in roadmap ", data);
  console.log(data[id]["title"]);

  return (
    <>
      <div>{data[id]["title"]}</div>
    </>
  );
}

Roadmap.propTypes = {
  data: ProtoTypes.array.isRequired,
};

export default Roadmap;

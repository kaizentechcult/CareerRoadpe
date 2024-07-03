import ProtoTypes from "prop-types";
import { useParams } from "react-router-dom";
import arrowDown from "/ArrowFacingDown.svg";
function Roadmap({ data }) {
  const { id } = useParams();

  // console.log("data in roadmap ", data);
  // console.log(data[id]["title"], data[id].steps[0].miniSteps[0]);

  return (
    <>
      <div className="bg-[#212020] mx-10 flex flex-col gap-10 text-center items-center justify-center rounded-lg md:flex md:flex-col md:mx-40 md:my-10 p-4">
        <div className="p-4 bg-blue-900 rounded-xl">Goal: {data[id]["title"]}</div>
        {data[id].steps.map((step, index) => (
          <div key={index} className="flex flex-col ">
            <div className="rounded-xl ">
              <h1 className="bg-white p-4 rounded-xl text-black">
                Step: {data[id].steps.findIndex((obj) => obj === step)}
              </h1>

              {step.miniSteps.map((miniSteps, index) => (
                <div
                  key={index}
                  className="flex flex-col p-2"
                >
                  <img
                    className="h-10 items-center justify-center m-4"
                    src={arrowDown}
                  />
                  <p className="p-4 bg-blue-900 rounded-xl">
                    {miniSteps} {console.log(miniSteps)}
                  </p>
                </div>
              ))}
            </div>
            <img className="h-10 items-center justify-center" src={arrowDown} />
          </div>
        ))}

        <h2 className="p-4 rounded-xl bg-[#f2a10a]">
          Congrats on becoming a {data[id]["title"]}
        </h2>
      </div>
    </>
  );
}

Roadmap.propTypes = {
  data: ProtoTypes.array.isRequired,
};

export default Roadmap;

import ProtoTypes from "prop-types";
import { useParams } from "react-router-dom";
import arrowDown from "/ArrowFacingDown.svg";
function Roadmap({ data }) {
  const { id } = useParams();

  console.log("data in roadmap ", data);
  console.log(data[id]["title"], data[id].steps[0].miniSteps[0]);

  return (
    <>
      <div className="bg-[#212020] flex flex-col gap-10 text-center items-center justify-center mx-8 p-4 rounded-lg md:flex md:flex-row md:-translate-x-[20vw] md:px-20 md:py-10 md:mx-auto">
        <div>Goal: {data[id]["title"]}</div>
        {data[id].steps.map((step) => (
          <div className="flex flex-col ">
            <div className=" border p-2">
              <h1>Step: {data[id].steps.findIndex((obj) => obj === step)}</h1>
              {step.miniSteps.map((miniSteps) => (
                <p className="flex flex-col">
                  <img
                    className="h-10 items-center justify-center"
                    src={arrowDown}
                  />
                  {miniSteps}
                </p>
              ))}
            </div>
            <img className="h-10 items-center justify-center" src={arrowDown} />
          </div>
        ))}

        <h2 className="border border-[4px] border-[#f2a10a]">
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

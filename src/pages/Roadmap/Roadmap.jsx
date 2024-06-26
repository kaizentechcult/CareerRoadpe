import ProtoTypes from "prop-types";
import { useParams } from "react-router-dom";
import arrowDown from "/ArrowFacingDown.svg";
function Roadmap({ data }) {
  const { id } = useParams();

  console.log("data in roadmap ", data);
  console.log(data[id]["title"], data[id].steps[0].miniSteps[0]);

  return (
    <>
      <div className="bg-[#212020] mx-10 flex flex-col gap-10 text-center items-center justify-center rounded-lg md:flex md:flex-col md:mx-40 md:my-10">
        <div>Goal: {data[id]["title"]}</div>
        {data[id].steps.map((step) => (
          <div key={step} className="flex flex-col ">
            <div className=" border p-2">
              <h1>Step: {data[id].steps.findIndex((obj) => obj === step)}</h1>
              {step.miniSteps.map((miniSteps) => (
                <p key={miniSteps} className="flex flex-col">
                  <img
                    className="h-10 items-center justify-center"
                    src={arrowDown}
                  />
                  {miniSteps} {console.log(miniSteps)}
                </p>
              ))}
            </div>
            <img className="h-10 items-center justify-center" src={arrowDown} />
          </div>
        ))}

        <h2 className="border-[4px] border-[#f2a10a]">
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

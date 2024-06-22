import React from "react";
import PropTypes from "prop-types";
import initData from "../../assets/roadmapInitialData.json";
const data = initData;
const id = 0;
console.log(data);
function Testing(props) {
  const {} = props;

  return (
    <>
      asdfsafd
      {data.map((step) => (
        <ol key={step.id} className="text-left border p-2">
          <li>{step.steps[0].miniSteps[0]}</li>
          <li>{step.steps[0].miniSteps[1]}</li>
          <li>{step.steps[0].miniSteps[2]}</li>
          <li>{step.steps[0].miniSteps[3]}</li>
        </ol>
      ))}
    </>
  );
}

Testing.propTypes = {};

export default Testing;

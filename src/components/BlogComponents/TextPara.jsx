import PropTypes from "prop-types"; // Import PropTypes for prop validation

const TextPara = ({ children }) => {
  return <p className="text-lg text-[#172b4d] text-justify mb-[26px]">{children}</p>;
};

TextPara.propTypes = {
  children: PropTypes.node.isRequired, // Make children prop required
};

export default TextPara;

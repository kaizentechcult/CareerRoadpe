import PropTypes from "prop-types";

const UnOrdered = ({ children }) => {
  return (
    <ul style={{ listStyleType: "disc" }} className="mt-[18px] mb-[26px]">
      {children}
    </ul>
  );
};
UnOrdered.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UnOrdered;

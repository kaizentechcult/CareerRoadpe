import PropTypes from "prop-types";

const Ordered = ({ children }) => {
  return (
    <ul style={{ listStyleType: "decimal" }} className="pl-4">
      {children}
    </ul>
  );
};
Ordered.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Ordered;

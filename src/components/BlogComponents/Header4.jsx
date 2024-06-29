import PropTypes from "prop-types";

const Header4 = ({ children, id }) => {
  return <h4 id={id} className="font-semibold text-[#202124] text-xl my-[20px]">{children}</h4>;
};

Header4.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Header4;

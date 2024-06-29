import PropTypes from "prop-types";

const Header4 = ({ children }) => {
  return <h4 className="font-semibold text-[#484848]">{children}</h4>;
};

Header4.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header4;

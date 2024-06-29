import PropTypes from "prop-types";

const Header1 = ({ children }) => {
  return <h1 className="font-semibold text-4xl text-center">{children}</h1>;
};

Header1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header1;

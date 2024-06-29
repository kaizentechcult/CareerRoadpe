import PropTypes from "prop-types";

const ListElement = ({ children }) => {
  return <li className="text-[#172b4d] text-lg ml-[21px] mb-[10px]">{children}</li>;
};
ListElement.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ListElement;

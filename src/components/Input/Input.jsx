import PropTypes from "prop-types";

const Input = ({ name, id, placeholder }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        name={name}
        id={id}
        className="p-3 rounded-full bg-[#D9D9D9] text-black"
      />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Input;

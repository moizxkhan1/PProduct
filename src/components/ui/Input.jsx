import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";

const Input = ({ type, color, ...props }) => {
  const commonStyles = `w-full p-3 text-[16px] outline-primary font-urbanist text-input rounded-md ${
    color === "main" ? "bg-main" : "bg-white"
  }`;

  if (type === "select") {
    return (
      <div className="relative">
        <select className={`${commonStyles} appearance-none`}>
          {props.children}
        </select>
        <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>
    );
  }

  if (type === "checkbox") {
    return <input type={type} className="custom-checkbox" {...props} />;
  }

  return <input type={type} className={commonStyles} {...props} />;
};

Input.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "number",
    "select",
    "checkbox",
  ]).isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default Input;

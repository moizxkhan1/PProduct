import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ text, onClick, type = "primary" }) => {
  const buttonStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/85 transition active:scale-95 capitalize font-urbanist button w-[246px] h-[56px] rounded-lg",
    secondary:
      "w-full p-2 bg-primary text-white hover:bg-primary/85 transition active:scale-95 capitalize font-urbanist button rounded-lg flex gap-2 items-center justify-center",
  };

  return (
    <button
      className={
        type === "secondary" ? buttonStyles.secondary : buttonStyles.primary
      }
      onClick={onClick}
    >
      {text}
      {type === "secondary" && <FaArrowRight />}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;

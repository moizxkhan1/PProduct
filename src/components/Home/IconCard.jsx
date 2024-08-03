import PropTypes from "prop-types";
import Paragraph from "../ui/Paragraph";

const IconCard = ({ icon, text }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="bg-white p-4 rounded-xl fex justify-center items-center mb-2 md:mb-0">
        <img src={`/${icon}`} alt={icon} className="w-[48.8px] h-[51.75px]" />
      </div>
      <Paragraph type="timeline" className="md:hidden">
        {text}
      </Paragraph>
    </div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconCard;

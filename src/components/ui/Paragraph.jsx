import PropTypes from "prop-types";

const Paragraph = ({ className = "", type, children }) => {
  const styles = {
    primary: "text-normal text-black",
    secondary: "text-normalSecondary text-[#161C2D]",
    timeline: "text-timeline text-white",
    label: "text-[0.625em] font-bold md:text-label text-black",
  };
  const appliedStyle = styles[type] || styles.secondary;
  return (
    <p className={`font-urbanist ${className} ${appliedStyle}`}>{children}</p>
  );
};

Paragraph.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Paragraph;

import PropTypes from "prop-types";

const Subheading = ({ className, type, children }) => {
  return (
    <h3
      className={`font-urbanist ${className} ${
        type === "primary"
          ? "text-primary text-subheadingPrimary"
          : "text-secondary text-subheading"
      }`}
    >
      {children}
    </h3>
  );
};

Subheading.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Subheading;

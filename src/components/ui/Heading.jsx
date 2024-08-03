import PropTypes from "prop-types";

const Heading = ({ children, className }) => {
  return (
    <h1 className={`font-urbanist text-heading ${className}`}>{children}</h1>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Heading;

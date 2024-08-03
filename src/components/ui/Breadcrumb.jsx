import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const getPathname = (pathname) => {
    console.log(pathname);
    const parts = pathname.split("/").filter((part) => part);

    const breadcrumbs = parts.map((part, index) => {
      const words = part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const route = "/" + parts.slice(0, index + 1).join("/");

      return { name: words, route };
    });

    return breadcrumbs;
  };

  const path = getPathname(location.pathname);

  return (
    <div className="font-urbanist text-sm font-bold md:text-breadcrumb flex">
      <div>
        <Link to="/bilanz-und-er-erfassen">Product &gt; </Link>
      </div>
      {path.map((crumb, index) => (
        <span key={index} className="ml-2 flex items-center">
          {index > 0 && <p className="mx-2">/</p>}
          <Link
            to={crumb.route}
            className={`${
              index === path.length - 1
                ? "text-primary"
                : "text-secondary cursor-pointer"
            } transition hover:text-gray-600`}
          >
            {crumb.name}
          </Link>
        </span>
      ))}
    </div>
  );
};

Breadcrumb.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Breadcrumb;

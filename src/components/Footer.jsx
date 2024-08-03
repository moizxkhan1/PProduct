import { Link } from "react-router-dom";
const Footer = () => {
  // Pages
  const pages = ["Privacy Policy", "Terms & Conditions", "Support"];
  return (
    <div className="bg-white py-8">
      <div className="w-[80%] mx-auto flex flex-col gap-5 md:items-center md:gap-0 md:flex-row md:justify-between">
        <div>
          <Link to="/">
            <h1 className="rubik-700 logo text-primary">PProduct.io</h1>
          </Link>
        </div>
        <div className="flex gap-10">
          {pages.map((page, idx) => (
            <Link
              key={idx}
              to={"#"}
              className="font-urbanist footer text-secondary hover:text-secondary/70 transition"
            >
              {page}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

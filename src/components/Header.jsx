import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full py-4 bg-primary">
      <div className="container">
        <Link to="/">
          <h1 className="rubik-700 logo text-white">PProduct.io</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;

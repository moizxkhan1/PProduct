import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import Subheading from "../ui/Subheading";

const AboutSection = () => {
  return (
    <div className="py-5 md:py-10">
      <div className="container-75 text-center space-y-6">
        <Subheading type="primary">About the Product</Subheading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
        </Paragraph>
        <div>
          <Link to="bilanz-und-er-erfassen">
            <Button text="Get Your Report" type="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

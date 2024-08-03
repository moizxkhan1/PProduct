import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import Paragraph from "../ui/Paragraph";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-5 my-4">
      {/* left */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <Heading>
          Lorem ipsum dolor{" "}
          <span className="text-primary">sit amet consectetur</span> adipiscing
          elit sed do...
        </Heading>
        <Paragraph type="primary">
          Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in volupta velit esse cillum dolo re eu fugiat nulla
          pariatur.
        </Paragraph>
        <div className="w-full space-y-2">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-1/2">
              <Input type="email" placeholder="user@gmail.com" />
            </div>
            <div className="w-full md:w-1/2">
              <Input type="select">
                <option value="">Select a Branch</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Input>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-1/2">
              <Input type="select">
                <option value="">Select Use</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Input>
            </div>
            <div className="w-full md:w-1/2">
              <Button type="secondary" text="Weiter" />
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-1/2">
        <img
          src="/image 1-Photoroom 1.png"
          alt="hero-img"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;

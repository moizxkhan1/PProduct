import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import Subheading from "../ui/Subheading";
import CTA from "./CTA";

const Testemonial = () => {
  return (
    <div className="bg-divBg py-12">
      <div className="container-75 flex flex-col space-y-8 justify-center md:flex-row items-center md:justify-around">
        {/* first */}
        <div className="flex flex-col items-center text-center md:items-start md:text-start space-y-4  w-full md:w-[30%]">
          <Subheading type="secondary">
            Experienced experts are giving advices.
          </Subheading>
          <Paragraph type="secondary">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next Audit page.
          </Paragraph>

          <Button text="Get Started" type="primary" />
        </div>
        {/* second */}
        <div className="w-full md:w-[30%]">
          <img
            src="/man.png"
            alt="man-img"
            className="w-full h-auto rounded-sm"
          />
        </div>
        {/* third */}
        <div className="w-full md:w-[30%]">
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Testemonial;

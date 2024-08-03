import Paragraph from "../ui/Paragraph";
import Subheading from "../ui/Subheading";

const CTA = () => {
  return (
    <div className="flex flex-col space-y-5 text-center md:text-start">
      <div className="flex flex-col gap-2">
        <Subheading type="seondary">1M+</Subheading>
        <Paragraph type="sceondary">
          Customers visit Albino every month to get their service done.
        </Paragraph>
      </div>
      <div className="flex flex-col gap-2">
        <Subheading type="seondary">92%</Subheading>
        <Paragraph type="sceondary">
          Satisfaction rate comes from our awesome customers.
        </Paragraph>
      </div>
      <div className="flex flex-col gap-2">
        <Subheading type="seondary">4.9/5.0</Subheading>
        <Paragraph type="sceondary">
          Average customer ratings we have got all over internet.
        </Paragraph>
      </div>
    </div>
  );
};

export default CTA;

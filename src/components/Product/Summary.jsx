import Subheading from "../ui/Subheading";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";

import PropTypes from "prop-types";

const Summary = ({ amount }) => {
  return (
    <div className="bg-white p-8 flex flex-col justify-around text-center md:text-start rounded-xl">
      <div className="space-y-6 pb-4 border-b-2 border-main">
        <Paragraph type="secondary" className="font-bold">
          Total Payable Amount
        </Paragraph>
        <Heading type="primary" className="text-primary">
          {amount}
        </Heading>
      </div>
      <div className="flex gap-4 items-center">
        <Subheading type="seondary">1M+</Subheading>
        <Paragraph type="sceondary" className="text-sm">
          Customers visit Albino every month to get their service done.
        </Paragraph>
      </div>
      <div className="flex gap-4 items-center">
        <Subheading type="seondary">92%</Subheading>
        <Paragraph type="sceondary" className="text-sm">
          Satisfaction rate comes from our awesome customers.
        </Paragraph>
      </div>
      <div className="flex gap-4 items-center">
        <Subheading type="seondary">4.9</Subheading>
        <Paragraph type="sceondary" className="text-sm">
          Average customer ratings we have got all over internet.
        </Paragraph>
      </div>
    </div>
  );
};

Summary.propTypes = {
  amount: PropTypes.string,
};

export default Summary;

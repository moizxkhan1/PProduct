import Paragraph from "../ui/Paragraph";
import Subheading from "../ui/Subheading";
import Input from "../ui/Input";

import PropTypes from "prop-types";

const DataForm = ({ section, labels }) => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-[33%]">
            <Subheading type="primary">{section}</Subheading>
          </div>
          <div className="w-[33%] hidden md:block">
            <Paragraph type="primary" className="font-bold">
              2022
            </Paragraph>
          </div>
          <div className="w-[33%] hidden md:block">
            <Paragraph type="primary" className="font-bold">
              2023
            </Paragraph>
          </div>
        </div>
        {labels.map((label, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 justify-between border-b-2 py-3 border-main"
          >
            <div className="w-[33%]">
              <Paragraph type="label">{label}</Paragraph>
            </div>
            <div className="w-[33%]">
              <Input type="text" color="main" />
            </div>
            <div className="w-[33%]">
              <Input type="text" color="main" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

DataForm.propTypes = {
  section: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
};
export default DataForm;

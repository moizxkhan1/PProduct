import Breadcrumb from "../ui/Breadcrumb";
import Button from "../ui/Button";
import ScatterPlot from "../Product/ScatterChart";
import { useNavigate } from "react-router-dom";

const Charts = () => {
  const navigate = useNavigate();
  const count = [1, 2, 3, 4, 5, 6];
  const dataPoints = [{ x: 140, y: 55 }];
  return (
    <div className="container py-10 space-y-6">
      {/* Breadcrumb and Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full md:w-1/2">
          <Breadcrumb />
        </div>
        <div className="w-full md:w-1/2 flex md:justify-end gap-4">
          <Button
            type="primary"
            text="Print"
            onClick={() => navigate("/Checkout")}
          />
          <Button
            type="primary"
            text="Download"
            onClick={() => navigate("/Checkout")}
          />
        </div>
      </div>
      {/* Charts */}
      {count.map((item) => (
        <div
          key={item}
          className="flex flex-col gap-5 md:flex-row md:justify-between"
        >
          <div className="w-full md:w-1/2 bg-white p-4 rounded-lg">
            <ScatterPlot title="Sicherheit" dataPoints={dataPoints} />
          </div>
          <div className="w-full md:w-1/2 bg-white p-4 rounded-lg">
            <ScatterPlot title="Sicherheit" dataPoints={dataPoints} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Charts;

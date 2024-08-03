import PropTypes from "prop-types";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ScatterPlot = ({ title, dataPoints }) => {
  const data = {
    datasets: [
      {
        label: title,
        data: dataPoints,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          size: 24,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        ticks: {
          callback: (value) => `${value}%`,
        },
        min: 100,
        max: 180,
      },
      y: {
        ticks: {
          callback: (value) => `${value}%`,
        },
        min: 0,
        max: 60,
      },
    },
  };

  return <Scatter data={data} options={options} />;
};

ScatterPlot.propTypes = {
  title: PropTypes.string.isRequired,
  dataPoints: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ScatterPlot;

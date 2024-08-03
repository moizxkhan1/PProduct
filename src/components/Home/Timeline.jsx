// Timeline.jsx
import React from "react";
import IconCard from "./IconCard";
import { FaStar, FaLightbulb, FaGem, FaRocket } from "react-icons/fa";
import Paragraph from "../ui/Paragraph";

const Timeline = () => {
  const items = [
    {
      icon: "star.png",
      text: "Consectetur adipiscing elit sed do eiusmod tempor in cididunt",
    },
    {
      icon: "bulb-on.png",
      text: "Consectetur adipiscing elit sed do eiusmod tempor in cididunt",
    },
    {
      icon: "diamond.png",
      text: "Consectetur adipiscing elit sed do eiusmod tempor in cididunt",
    },
    {
      icon: "plane.png",
      text: "Consectetur adipiscing elit sed do eiusmod tempor in cididunt",
    },
  ];

  return (
    <div className="bg-primary py-10">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="container-75 flex md:flex-row items-center justify-between p-6 rounded-lg font-urbanist">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <IconCard icon={item.icon} />
              {index < items.length - 1 && (
                <div className="hidden md:block flex-grow h-2 border-b-2 border-dashed border-white mx-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="w-[80%] mx-auto flex text-center justify-between">
          {items.map((item, index) => (
            <div key={index} className="w-[20%] text-center">
              <Paragraph type="timeline">{item.text}</Paragraph>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden">
        <div className="container mx-auto flex flex-col space-y-10 md:space-y-0 md:flex-row items-center justify-between p-6 rounded-lg">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <IconCard icon={item.icon} text={item.text} />
              {index < items.length - 1 && (
                <div className="hidden md:flex flex-grow h-0.5 mx-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

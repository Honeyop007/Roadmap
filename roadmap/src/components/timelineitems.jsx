import React from "react";

const TimelineItems = ({ title, date, description }) => {
  return (
    <div className="timeline-item  p-2 w-full flex ">
      <div className="dot mt-[10px] items-center flex flex-col mr-4">
        <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
        <div className="line w-[2px] bg-yellow-200"></div>
      </div>
      <div className="content mr-10">
        {/* Title and Date */}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-sm text-yellow-400">{date}</span>
        {/* Description */}
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItems;

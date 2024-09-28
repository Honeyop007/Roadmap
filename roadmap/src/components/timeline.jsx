import React from "react";
import TimelineItems from "./timelineitems";

const Timeline = () => {
  const timelineData = [
    {
      title: "Price Action",
      date: "15 to 20 Days",
      description:
        "1. Support and Resistance Levels 2. Trend Following 3. Candlestick Patterns 4. Breakout Trading 5. Retracement Trading 6. Pin Bar Reversal 7. Inside Bar Strategy 9. Order Flow Trading 10. Scalping with Price Action",
    },
    {
      title: "Market Structure",
      date: "1 to 1.5 Months",
      description:
        "1. Trends 2. Swing Highs and Swing Lows 3. Support and Resistance Levels  4. Market Phases 6. Volume Analysis 7. Order Flow 8. Time Frames 9. BOS 10. CHOCH 11. Supply and Demand",
    },
    {
      title: "SMC",
      date: "1 Month",
      description:
        "1. Understanding Smart Money 2. Market Structure 3. Order Blocks 4. Liquidity Pools 5. Market Manipulation Patterns 6. Breakouts and Retests 8. Institutional Order Flow 9. Risk Management 10. Patience and Discipline",
    },
  ];

  return (
    <div className="timeline m-4 w-full">
      {timelineData.map((item, index) => (
        <TimelineItems
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Timeline;

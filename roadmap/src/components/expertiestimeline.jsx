import React from 'react'
import TimelineItems from './timelineitems';

const Expertiestimeline = () => {
    const timelineData = [
      {
        title: "Economic Indicator Analysis",
        date: "Present",
        description:
          "Interest Rates: Monitor central bank policies and interest rate changes, as they can significantly impact currency and bond markets GDP Growth: Analyze Gross Domestic  growth rates to assess economic health.",
      },
      {
        title: "Sector and Industry Analysis",
        date: "Present",
        description:
          "Market Trends: Identify sectors that are performing well in the current economic environment. For example, technology may thrive during a boom, while utilities may do better in a recession. Cyclical vs. Defensive Stocks: Understand the difference between cyclical stocks (which perform well in a growing economy) and defensive stocks (which remain stable during downturns).",
      },
      {
        title: "Market Sentiment and News Analysis",
        date: "Present",
        description:
          "News Monitoring: Stay updated with news releases, geopolitical events, and market sentiment that can affect asset prices.",
      },
      {
        title: "Backtesting Strategies",
        date: "Present",
        description:
          "Historical Analysis: Use historical data to backtest your fundamental trading strategies, helping you to refine your approach before implementing it in live markets.",
      },      {
        title: "Use of Stop-Loss and Take-Profit Orders",
        date: "Present",
        description:
          "Risk Management: Set stop-loss orders to limit potential losses and take-profit orders to secure gains when specific price levels are reached.",
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
export default Expertiestimeline

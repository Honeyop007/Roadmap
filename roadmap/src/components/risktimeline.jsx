import React from 'react'
import TimelineItems from './timelineitems';
function Risktimeline() {
    const timelineData = [
        {
            title: "Risk Analysis",
            date: "Present",
            description:
                "Conducting thorough assessments to identify potential financial risks and their impact on investment strategies. This process helps in developing robust risk management protocols to safeguard capital.",
        },
        {
            title: "Market Hedges",
            date: "Present",
            description:
                "Implementing strategies to protect against unfavorable price movements in the market. This involves using derivatives or other instruments to mitigate potential losses while maintaining exposure to market opportunities.",
        },
        {
            title: "Stop Loss Trailing",
            date: "Present",
            description:
                "Employing a dynamic stop-loss strategy that adjusts automatically as the market price moves in favor of a trade. This helps lock in profits while providing a safety net against adverse price movements.",
        },
        {
            title: "Take Profit Trailing",
            date: "Present",
            description:
                "Utilizing a trailing take profit mechanism that adjusts upwards with favorable market movements, allowing traders to secure profits while letting their positions run to maximize gains.",
        },
        {
            title: "SL and TP Pro Guide",
            date: "Present",
            description:
                "A comprehensive guide on setting effective stop-loss (SL) and take-profit (TP) levels. This resource educates traders on balancing risk and reward to enhance their trading performance.",
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
}

export default Risktimeline

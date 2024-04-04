import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Option from "../Option/Option";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import "./App.module.css";

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("keys");
    return savedClicks !== null
      ? JSON.parse(savedClicks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("keys", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const procentPocitive = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          clicks={clicks}
          totalFeedback={totalFeedback}
          procentPocitive={procentPocitive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;

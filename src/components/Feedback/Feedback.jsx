import "./Feedback.module.css";

export default function Feedback({ clicks, totalFeedback, procentPocitive }) {
  return (
    <>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {procentPocitive}%</p>
    </>
  );
}
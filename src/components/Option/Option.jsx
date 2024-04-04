import "./Option.module.css";

export default function Option({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback ? <button onClick={resetFeedback}>Reset</button> : null}
    </>
  );
}

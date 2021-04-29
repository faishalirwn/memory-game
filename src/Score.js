import "./styles/Score.css";

function Score(props) {
  return (
    <div className="score">
      <span>Score: {props.score}</span>
      <span>Best Score: {props.bestScore}</span>
    </div>
  );
}

export default Score;

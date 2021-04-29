import "./styles/Card.css";

function Card(props) {
  return (
    <div className="card" key={props.key}>
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default Card;

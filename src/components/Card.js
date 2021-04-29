import "../styles/Card.css";

function Card(props) {
  const backgroundImgStyle = {
    backgroundImage: `url(${props.img})`,
  };
  return (
    <div onClick={() => props.handleCardClick(props.name)} className="card">
      <div class="card-img" style={backgroundImgStyle}></div>
      {/* <img src={props.img} alt={props.name} /> */}
      <p>{props.name}</p>
    </div>
  );
}

export default Card;

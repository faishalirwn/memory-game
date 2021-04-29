import "./styles/CardList.css";
import Card from "./Card";

function CardList(props) {
  return (
    <div className="card-list">
      {props.cards.map((card, i) => (
        <Card key={i} img={card.img} name={card.name} />
      ))}
    </div>
  );
}

export default CardList;

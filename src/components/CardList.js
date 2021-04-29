import "../styles/CardList.css";
import Card from "./Card";

function CardList(props) {
  const shuffleCard = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const cards = shuffleCard(props.cards);

  return (
    <div className="card-list">
      {cards.map((card, i) => (
        <Card
          handleCardClick={props.handleCardClick}
          key={i}
          img={card.img}
          name={card.name}
        />
      ))}
    </div>
  );
}

export default CardList;

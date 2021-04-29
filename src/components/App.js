import CardList from "./CardList";
import Score from "./Score";
import "../styles/App.css";
import { useState } from "react";

const CARDS = [
  {
    img:
      "https://lh3.googleusercontent.com/Zm6Fji_CaobhJIVzBGZ5sM2SuOdXJT2snKWWrOxEDesxY0W_hSNYrPRREyxtG36zwEYYVSm3bZrTast0=w544-h544-l90-rj",
    name: "Ado",
  },
  {
    img:
      "https://yt3.ggpht.com/ytc/AAUvwnglGbT5N8Jwfphy_wP2DWKXZ2mkbY3q1ZfmA44O1w=s176-c-k-c0x00ffffff-no-rj-mo",
    name: "Eve",
  },
  {
    img:
      "https://lh3.googleusercontent.com/1R7O2eSFP8Xv2bVPmyc8dB_HnLK723RizDuNT5x4MyLReA_7PFbI8OUnsuAYvo-VGdOabf_FqoBbFtY=s190-c-k-c0x00ffffff-no-rj-mo",
    name: "Yoasobi",
  },
  {
    img:
      "https://lh3.googleusercontent.com/7Zno53LZz42j4xToQqkksPO701F4wnKvPDTsMS0oHGN0ir-1dOD17cdGNboJniw-e6Yyt6mOuodbJpE=s190-c-k-c0x00ffffff-no-rj-mo",
    name: "Yama",
  },
  {
    img: "https://i.scdn.co/image/f4c860cd839b2883eccb2c2ddd14ec578a7d3977",
    name: "Yorushika",
  },
  {
    img: "https://i.scdn.co/image/ab6761610000e5ebb93e0163123bb30c27182cdd",
    name: "Aimer",
  },
  {
    img: "https://i.scdn.co/image/b6564946b312930ffe49227e1423c4597b38730b",
    name: "King Gnu",
  },
  {
    img: "https://i.scdn.co/image/eb6287ef617afb66a7ee71638ca8918d279bc52d",
    name: "Lisa",
  },
  {
    img: "https://i.scdn.co/image/d40da1cb80895eb597687e6e3659045575e53503",
    name: "ZUTOMAYO",
  },
  {
    img: "https://i.scdn.co/image/383c564660d934d8f3c4985a50791ad85f155e36",
    name: "Mamang Kenshi",
  },
  {
    img: "https://i.scdn.co/image/4362f5320882e279cc2269797f8a87ea4a93b2ca",
    name: "Higedan",
  },
  {
    img: "https://i.scdn.co/image/ab6761670000ecd46a8d510e910a11d1f3b394d4",
    name: "RADWIMPS",
  },
  {
    img: "https://i.scdn.co/image/4eeb44227295a14c5020119831a43ce8a920a4d7",
    name: "Miki Matsubara",
  },
  {
    img:
      "https://c-sf.smule.com/rs-s-sf-2/arr/72/a7/f758b550-f358-4d6a-b346-4bb1bd046536_256.jpg",
    name: "Mariya Takeuchi",
  },
  {
    img: "https://i.scdn.co/image/9bfe4b793edc2abec754957cf46198c5b4fa4ae2",
    name: "ALI",
  },
];

function App() {
  const [score, setScore] = useState({ current: 0, best: 0 });
  const [clickedCards, setClickedCards] = useState([]);

  const handleCardClick = (cardName) => {
    // Clicked the same card
    if (clickedCards.includes(cardName)) {
      if (score.current > score.best) {
        setScore({ current: 0, best: score.current });
      } else {
        setScore({ current: 0, best: score.best });
      }

      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, cardName]);
      setScore({ current: score.current + 1, best: score.best });
    }
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <p>Don't click on the same card</p>
      <Score score={score.current} bestScore={score.best} />
      <CardList
        cards={CARDS}
        handleCardClick={(cardIndex) => handleCardClick(cardIndex)}
      />
      <footer>
        <a href="https://github.com/faishalirwn/memory-game">Source Code</a>
      </footer>
    </div>
  );
}

export default App;

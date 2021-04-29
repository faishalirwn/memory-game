import CardList from "./CardList";
import Score from "./Score";
import "./styles/App.css";

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
];

function App() {
  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <Score score={1} bestScore={2} />
      <CardList cards={CARDS} />
    </div>
  );
}

export default App;

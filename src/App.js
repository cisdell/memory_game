import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // console.log(cards, turns)

  // handle a choice
  const handleChoice = (card) => {
    //console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    // console.log("ChoiceOne:", choiceOne)
    // console.log("ChoiceTwo:", choiceTwo)
    // if (choiceOne && choiceTwo) {
    //   let msg = "card not match!"
    //   // console.log(choiceOne)
    //   if (choiceOne.src === choiceTwo.src) {
    //   msg = 'match!'
    //   }
    //   console.log(msg)
    //   resetTurn();
    // }
  }

  //compare two cards
  useEffect(() => {
    let msg = ''
    if (choiceOne && choiceTwo) {
      choiceOne.src === choiceTwo.src ? msg = 'match' : msg = 'not match';
      resetTurn()
    }
    console.log(msg)
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1)
  }


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice}/>
        ))}
      </div>
    </div>
  )
}

export default App;

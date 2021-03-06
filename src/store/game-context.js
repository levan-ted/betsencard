import React, { useState } from "react";

import { botCardImages, playerCardImages } from "../assets/images";
import flip from "../assets/sounds/flip.mp3";
import scored from "../assets/sounds/score.wav";
import fail from "../assets/sounds/fail.mp3";

const flipAudio = new Audio(flip);
const scoreAudio = new Audio(scored);
const failAudio = new Audio(fail);

const defaultContext = {
  isStarted: false,
  playerName: "",
  botName: "",
  playerCards: [],
  botCards: [],
  score: [0, 0],
  botCard: {},
  playerCard: {},
  hideCards: true,
  botsTurn: true,
  startGame: () => {},
  nextRound: () => {},
  move: () => {},
  reset: () => {},
  showResults: false,
};

const GameContext = React.createContext(defaultContext);

const initialCards = {
  botCards: [
    { val: 1, imgUrl: botCardImages.s1 },
    { val: 2, imgUrl: botCardImages.s2 },
    { val: 3, imgUrl: botCardImages.s3 },
    { val: 4, imgUrl: botCardImages.s4 },
    { val: 5, imgUrl: botCardImages.s5 },
    { val: 6, imgUrl: botCardImages.s6 },
    { val: 7, imgUrl: botCardImages.s7 },
    { val: 8, imgUrl: botCardImages.s8 },
    { val: 9, imgUrl: botCardImages.s9 },
    { val: 10, imgUrl: botCardImages.s10 },
    { val: 11, imgUrl: botCardImages.s11 },
    { val: 12, imgUrl: botCardImages.s12 },
    { val: 13, imgUrl: botCardImages.s13 },
  ],
  playerCards: [
    { val: 1, imgUrl: playerCardImages.h1 },
    { val: 2, imgUrl: playerCardImages.h2 },
    { val: 3, imgUrl: playerCardImages.h3 },
    { val: 4, imgUrl: playerCardImages.h4 },
    { val: 5, imgUrl: playerCardImages.h5 },
    { val: 6, imgUrl: playerCardImages.h6 },
    { val: 7, imgUrl: playerCardImages.h7 },
    { val: 8, imgUrl: playerCardImages.h8 },
    { val: 9, imgUrl: playerCardImages.h9 },
    { val: 10, imgUrl: playerCardImages.h10 },
    { val: 11, imgUrl: playerCardImages.h11 },
    { val: 12, imgUrl: playerCardImages.h12 },
    { val: 13, imgUrl: playerCardImages.h13 },
  ],
};

export const GameCtxProvider = (props) => {
  const [isStarted, setIsStarted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerCards, setPlayerCards] = useState(initialCards.playerCards);
  const [botCards, setBotCards] = useState(initialCards.botCards);
  const [score, setScore] = useState([0, 0]);

  const [playerCard, setPlayerCard] = useState(null);
  const [botCard, setBotCard] = useState(null);

  const [hideCards, setHideCards] = useState(true);
  const [botsTurn, setBotsTurn] = useState(true);

  const [showResults, setShowResults] = useState(false);

  const reset = () => {
    setIsStarted(false);
    setPlayerName("");
    setPlayerCards(initialCards.playerCards);
    setBotCards(initialCards.botCards);
    setScore([0, 0]);
    setPlayerCard(null);
    setBotCard(null);
    setShowResults(false);
  };

  const finish = () => {
    setShowResults(true);
  };

  const nextRound = () => {
    if (botCards.length === 0) {
      finish();
      return;
    }
    const selectedBotCardIdx = Math.trunc(Math.random() * botCards.length);
    const selectedBotCard = botCards[selectedBotCardIdx];

    setBotCards((prevState) =>
      prevState.filter((el) => el !== selectedBotCard)
    );

    setTimeout(() => {
      setBotCard((prevState) => selectedBotCard);
      flipAudio.play();
    }, 1000);
    setBotsTurn(false);
    if (playerCards.length === 0) setIsStarted(false);
  };

  const startGame = (name) => {
    setIsStarted(true);
    setPlayerName(name);
    nextRound();
  };

  const move = (cardValue) => {
    const selectedPlayerCard = playerCards.find((el) => el.val === cardValue);
    console.log(selectedPlayerCard);

    setPlayerCards((prevState) =>
      prevState.filter((el) => el !== selectedPlayerCard)
    );

    setTimeout(() => {
      setPlayerCard(selectedPlayerCard);
      flipAudio.play();
    }, 500);

    setTimeout(() => {
      setHideCards(false);

      if (selectedPlayerCard.val > botCard.val) {
        setScore((prevScore) => {
          const newScore = [prevScore[0]++, prevScore[1]];
          return newScore;
        });
        scoreAudio.play();
      }

      if (selectedPlayerCard.val < botCard.val) {
        setScore((prevScore) => {
          const newScore = [prevScore[0], prevScore[1]++];
          return newScore;
        });
        failAudio.play();
      }
    }, 2000);

    setBotsTurn(true);

    setTimeout(() => {
      setHideCards(true);
      setBotCard(null);
      setPlayerCard(null);
      nextRound();
    }, 3000);
  };

  return (
    <GameContext.Provider
      value={{
        isStarted,
        playerName,
        botName: "Bot",
        playerCards,
        botCards,
        score,
        botCard,
        playerCard,
        hideCards,
        botsTurn,
        startGame,
        nextRound,
        move,
        reset,
        showResults,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;

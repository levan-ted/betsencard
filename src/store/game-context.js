import React, { useState } from 'react';

const defaultContext = {
  isStarted: false,
  playerName: '',
  botName: '',
  playerCards: [],
  botCards: [],
  playerScore: 0,
  botScore: 0,
  enterName: () => {},
};

const GameContext = React.createContext(defaultContext);

export const GameCtxProvider = (props) => {
  const [isStarted, setIsStarted] = useState(false);
  const [playerName, setPlayerName] = useState('Playereeeeeee');
  const [playerCards, setPlayerCards] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);
  const [botCards, setBotCards] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  const enterName = () => {
    console.log('clicked');
    setPlayerName('Levan');
  };

  return (
    <GameContext.Provider
      value={{
        isStarted: isStarted,
        playerName: playerName,
        botName: 'Bot',
        playerCards: playerCards,
        botCards: botCards,
        playerScore: playerScore,
        botScore: botScore,
        enterName: enterName,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;

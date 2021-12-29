import React, { useContext } from 'react';
import GameContext from '../../store/game-context';
import classes from './Cards.module.scss';

function Cards() {
  const ctx = useContext(GameContext);
  return <section onClick={ctx.enterName}>{ctx.playerName}</section>;
}

export default Cards;

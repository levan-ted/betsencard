import React, { useContext } from 'react';
import GameContext from '../../store/game-context';
import classes from './Card.module.scss';

import { cardBack } from '../../assets/images/index';

function Card(props) {
  const ctx = useContext(GameContext);
  const { cardValue, imgSrc, isHidden } = props;

  const selectPlayerCard = () => {
    if (ctx.botsTurn) return;
    ctx.move(cardValue);
  };
  const cardClasses = isHidden
    ? classes.card
    : `${classes.card} ${classes.interactive}`;
  return (
    <div onClick={isHidden ? null : selectPlayerCard} className={cardClasses}>
      <img src={isHidden ? cardBack : imgSrc} alt="card" />
    </div>
  );
}

export default Card;

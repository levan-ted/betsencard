import React from 'react';
import classes from './Card.module.scss';

import { cardBack } from '../../assets/images/index';

function Card(props) {
  const { cardValue, imgSrc, isHidden } = props;
  const cardClasses = isHidden
    ? classes.card
    : `${classes.card} ${classes.interactive}`;
  return (
    <div className={cardClasses}>
      <img src={isHidden ? cardBack : imgSrc} alt="card" />
    </div>
  );
}

export default Card;

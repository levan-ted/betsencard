import React, { useContext } from 'react';
import GameContext from '../../store/game-context';
import classes from './PlayerCards.module.scss';

import { playerCards } from '../../assets/images';
import Card from '../Card';

function PlayerCards() {
  const ctx = useContext(GameContext);
  return (
    <section className={classes['cards-section']}>
      <div className={classes['cards-container']}>
        {ctx.playerCards.map((card) => {
          return (
            <Card
              cardValue={card}
              imgSrc={playerCards[`h${card}`]}
              isHidden={false}
            />
          );
        })}
      </div>
    </section>
  );
}

export default PlayerCards;

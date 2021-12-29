import React, { useContext } from 'react';
import GameContext from '../../store/game-context';
import classes from './BotCards.module.scss';

import Card from '../Card';

function BotCards() {
  const ctx = useContext(GameContext);

  return (
    <section className={classes['cards-section']}>
      <div className={classes['cards-container']}>
        {ctx.botCards.map((card) => {
          return (
            <Card cardValue={card.val} imgSrc={card.imgUrl} isHidden={true} />
          );
        })}
      </div>
    </section>
  );
}

export default BotCards;

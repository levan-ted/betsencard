import React, { useContext } from 'react';
import GameContext from '../../store/game-context';
import classes from './BotCards.module.scss';

import { botCards } from '../../assets/images';
import Card from '../Card';

function BotCards() {
  const ctx = useContext(GameContext);

  return (
    <section className={classes['cards-section']}>
      <div className={classes['cards-container']}>
        {ctx.botCards.map((card) => {
          return (
            <Card
              cardValue={card}
              imgSrc={botCards[`s${card}`]}
              isHidden={true}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BotCards;
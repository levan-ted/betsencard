import React, { useContext } from 'react';
import GameContext from '../../store/game-context';
import Card from '../Card';

function Stage() {
  const ctx = useContext(GameContext);
  return (
    <section>
      <div>
        {ctx.botCard && (
          <Card imgSrc={ctx.botCard.imgUrl} isHidden={ctx.hideCards} />
        )}
      </div>
      <div>
        {ctx.playerCard && (
          <Card imgSrc={ctx.playerCard.imgUrl} isHidden={ctx.hideCards} />
        )}
      </div>
    </section>
  );
}

export default Stage;

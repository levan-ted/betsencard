import React, { useContext } from 'react';
import GameContext from '../../store/game-context';

function Sidebar() {
  const ctx = useContext(GameContext);
  return (
    <aside>
      <button onClick={ctx.startGame}>Start</button>
    </aside>
  );
}

export default Sidebar;

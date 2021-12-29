import React, { useContext } from 'react';
import GameContext from '../../store/game-context';

import classes from './Sidebar.module.scss';

import Input from './Input';
import Scores from './Scores';

function Sidebar() {
  const ctx = useContext(GameContext);
  const classList = ctx.isStarted
    ? classes.sidebar
    : `${classes.sidebar} ${classes.expanded}`;
  return (
    <aside className={classList}>
      {ctx.isStarted ? <Scores /> : <Input />}
    </aside>
  );
}

export default Sidebar;

import React, { useContext } from 'react';
import GameContext from '../../store/game-context';

import classes from './Input.module.scss';

function Input() {
  const ctx = useContext(GameContext);
  const init = (e) => {
    e.preventDefault();
    if (e.target[0].value.trim() === '') {
      alert('Please input valid name');
      return;
    }
    ctx.startGame(e.target[0].value);
    e.target[0].value = '';
  };
  return (
    <form className={classes['input-form']} onSubmit={init}>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Start Game</button>
    </form>
  );
}

export default Input;

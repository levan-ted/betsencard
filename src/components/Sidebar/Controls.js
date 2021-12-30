import React, { useContext } from "react";
import classes from "./Controls.module.scss";

import GameContext from "../../store/game-context";

function Controls() {
  const ctx = useContext(GameContext);

  const startAgainHandler = () => {
    ctx.startAgain();
  };

  return (
    <div className={classes.controls}>
      <button onClick={startAgainHandler}>Start Again</button>
    </div>
  );
}

export default Controls;

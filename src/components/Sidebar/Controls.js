import React, { useContext } from "react";
import classes from "./Controls.module.scss";

import GameContext from "../../store/game-context";

function Controls() {
  const ctx = useContext(GameContext);

  const resetHandler = () => {
    ctx.reset();
  };

  return (
    <div className={classes.controls}>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default Controls;

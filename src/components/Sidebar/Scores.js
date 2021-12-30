import React, { useContext } from "react";
import GameContext from "../../store/game-context";
import Controls from "./Controls";

import classes from "./Scores.module.scss";

function Scores() {
  const ctx = useContext(GameContext);
  return (
    <div className={classes.container}>
      <div className={classes.subcontainer}>
        <span className={classes.name}>Computer</span>{" "}
        <span className={classes.score}>{ctx.score[1]} </span>
      </div>
      <Controls />
      <div className={classes.subcontainer}>
        <span className={classes.name}>{ctx.playerName}</span>{" "}
        <span className={classes.score}>{ctx.score[0]} </span>
      </div>
    </div>
  );
}

export default Scores;

import React, { useContext } from "react";
import classes from "./Results.module.scss";
import GameContext from "../../store/game-context";

function Results() {
  const ctx = useContext(GameContext);

  let resultText;

  if (ctx.score[0] > ctx.score[1]) {
    resultText = `Congratulations, ${ctx.playerName}!
      YOU WON!`;
  } else if (ctx.score[0] < ctx.score[1]) {
    resultText = `Sorry, ${ctx.playerName}.
      You lost the game, try again!`;
  } else {
    resultText = `${ctx.playerName}, you almost won. 
    It's a draw!`;
  }

  if (ctx.showResults) {
    return (
      <div className={classes.results}>
        <h3>{resultText}</h3>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Results;

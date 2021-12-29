import React from "react";
import classes from "./Card.module.scss";

import { cardBack } from "../../assets/images/index";

function Card(props) {
  const { cardValue, imgSrc, hidden } = props;

  return (
    <div className={classes.card}>
      <img src={hidden ? cardBack : imgSrc} />
    </div>
  );
}

export default Card;

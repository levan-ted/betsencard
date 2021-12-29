import classes from "./App.module.scss";
import { playerCards, botCards } from "./assets/images";

function App() {
  console.log(playerCards);
  console.log(botCards);
  return (
    <main className={classes.table}>
      <img src={playerCards.h2} />
    </main>
  );
}

export default App;

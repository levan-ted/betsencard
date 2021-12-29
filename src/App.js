import classes from './App.module.scss';

import { GameCtxProvider } from './store/game-context';
import BotCards from './components/BotCards';
import PlayerCards from './components/PlayerCards';

function App() {
  return (
    <GameCtxProvider>
      <main className={classes.table}>
        <BotCards />
        <PlayerCards />
      </main>
    </GameCtxProvider>
  );
}

export default App;

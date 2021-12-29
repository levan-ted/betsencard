import classes from './App.module.scss';

import { GameCtxProvider } from './store/game-context';
import BotCards from './components/BotCards';
import PlayerCards from './components/PlayerCards';
import Sidebar from './components/Sidebar';
import Stage from './components/Stage';

function App() {
  return (
    <GameCtxProvider>
      <main className={classes.table}>
        <Sidebar />
        <BotCards />
        <Stage />
        <PlayerCards />
      </main>
    </GameCtxProvider>
  );
}

export default App;

import classes from './App.module.scss';

import { GameCtxProvider } from './store/game-context';

// import { playerCards, botCards } from './assets/images';
import Cards from './components/Cards';

function App() {
  return (
    <GameCtxProvider>
      <main className={classes.table}>
        <Cards />
      </main>
    </GameCtxProvider>
  );
}

export default App;

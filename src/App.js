import Gameboard from './components/Gameboard/Gameboard'
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        React Mastermind
      </header>
      <Gameboard />
      <ColorPicker />
      <GameTimer />
      <NewGameButton />
      <footer className='component'>footer</footer>
    </div>
  );
}

export default App;

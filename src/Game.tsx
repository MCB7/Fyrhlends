import { CharacterProvider } from "./context/CharacterContext";
import CreateCharacter from './components/CreateCharacter'
import Character from './components/Character'

const Game: React.FC = () => {
  return (
    <CharacterProvider>
  <CreateCharacter/>
  <Character/>
    </CharacterProvider>
  );
};
export default Game

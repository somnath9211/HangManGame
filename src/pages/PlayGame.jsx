import { useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";

function PlayGame() {
  const { state } = useLocation();
  return (
    <>
      <h1>Play Game</h1>
      <MaskedText text={state.wordSelected} guessedLetters={[]} />
      <div>
        <LetterButtons
          text={state.wordSelected}
          guessedLetters={[]}
          onLetterClick={() => {}}
        />
      </div>
    </>
  );
}

export default PlayGame;

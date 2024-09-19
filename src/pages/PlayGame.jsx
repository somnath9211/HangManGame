import { useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";

function PlayGame() {
  const { state } = useLocation();

  const [guessedLetters, setGuessedLatters] = useState([]);
  const [step, setStep] = useState(0);

  function handleLatterClick(letter) {
    if (state?.wordSelected?.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Wrong");
      setStep(step + 1);
    }
    setGuessedLatters([...guessedLetters, letter]);
  }
  return (
    <div className="w-[800px] bg-white-600 border-2 ">
      <h1 className=" mx-[200px]">{state.passHint}</h1>

      <MaskedText
        text={state.wordSelected}
        guessedLetters={guessedLetters}
        className=" "
      />
      <div>
        <LetterButtons
          text={state.wordSelected}
          guessedLetters={guessedLetters}
          onLetterClick={handleLatterClick}
        />
      </div>
      <div>
        <HangMan step={step} />
      </div>
    </div>
  );
}

export default PlayGame;

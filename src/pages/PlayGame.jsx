import {} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import { wordContext } from "../Context/WordContext";

function PlayGame() {
  // const { state } = useLocation();

  const { word, hint } = useContext(wordContext);

  const [guessedLetters, setGuessedLatters] = useState([]);
  const [step, setStep] = useState(0);

  function handleLatterClick(letter) {
    if (word?.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Wrong");
      setStep(step + 1);
    }
    setGuessedLatters([...guessedLetters, letter]);
  }
  return (
    <div className="w-[800px] bg-white-600 border-2 ">
      <h1 className=" mx-[200px]">{hint}</h1>

      <MaskedText text={word} guessedLetters={guessedLetters} className=" " />
      <div>
        <LetterButtons
          text={word}
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

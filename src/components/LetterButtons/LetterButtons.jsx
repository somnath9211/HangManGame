const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButtons({ text, guessedLetters, onLetterClick }) {
  const originalLetters = new Set(text.toUpperCase().split(""));
  const guessedLettersSet = new Set(guessedLetters);

  const buttonStyle = function (letter) {
    if (guessedLettersSet.has(letter)) {
      return `${originalLetters.has(letter) ? "bg-green-500" : "bg-red-500"}`;
    } else {
      return "bg-blue-500";
    }
  };

  // Directly return the JSX array containing the button elements
  return ALPHABETS.map((letter) => (
    <button
      key={`button-${letter}`}
      onClick={onLetterClick}
      disabled={guessedLettersSet.has(letter)}
      className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}>
      {letter}
    </button>
  ));
}

export default LetterButtons;

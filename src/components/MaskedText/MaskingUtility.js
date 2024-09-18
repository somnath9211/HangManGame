/**
 *
 * @param {The word is given as Input and is expected to be gussed} originalWord
 * @param {Letter which are gussed by the user alredy} guessedLetters
 * Ex: originalWord : HUMBLE
 * guessedLetters: ['H', 'M', 'E']
 *
 * return -> 'H _ M _ _ E'
 */

export function getMaskedString(originalWord, guessedLetters) {
  console.log(guessedLetters);
  guessedLetters = guessedLetters.map((letter) => letter.toUpperCase()); // ['h', 'M', 'e'] -> ['H', 'M', 'E']

  // console.log(guessedLetters);

  const guessedLetterSet = new Set(guessedLetters);

  const result = originalWord
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessedLetterSet.has(char)) {
        return char;
      } else {
        return "_";
      }
    });

  return result;
}

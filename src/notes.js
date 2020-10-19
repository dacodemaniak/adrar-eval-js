let _notes = [];
let _moyenne = 0.0;

/**
 * Set notes array using spread operator
 */
export const setNotes = (...notes) => {
  _notes = notes;
};

/**
 * Set average note using a "reducer"
 */
export const moyenne = () => {
  if (_notes.length) {
    const arraySum = _notes.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return arraySum / _notes.length;
  } else {
    throw new Error("Notes have to be set before to get the average value");
  }
};

/**
 * Exploit already defined functions to get a mention from average
 */
export const mention = (...notes) => {
  setNotes(...notes);
  const average = moyenne();
  if (moyenne > 16) {
    return `${average} : Très bien`;
  } else if (average > 10) {
    return `${average} : Assez bien`;
  }

  return `${average} : Fail`;
};

const name = "Julien";
const age = 32;
const passions = ["Coder", "Râler"];

const array = [name, age, passions];

/**
 * Using a "namespace" size() can be specialized here
 */
export const Arrays = {
  size: () => array.length,

  firstElementSize: () => array[0].length,

  secondPassion: () => array[2][1]
};

// Import stylesheets
import "./style.css";

import { setNotes, moyenne, mention } from "./src/notes";
import { setString, size, secondChar, lastChar } from "./src/strings";
import { Arrays } from "./src/arrays";
import { welcome } from "./src/stringAndArrays";
import { stripChars, formSurvey } from "./src/userInput";
import BodyMassIndex from "./src/BodyMassIndex";
import { Personne } from "./src/Person";

// Write Javascript code!
const appDiv = document.getElementById("app");

// Average computing
setNotes(15, 12, 8);
console.log(`Moyenne : ${moyenne()}`);

// Mention computing
console.log(mention(5, 12, 3));

// String manipulations
setString("Julien");
console.log(
  `String is ${size()} length, second char is ${secondChar()}, last char is ${lastChar()}`
);

// Arrays from namespace (avoiding conflict with previous size method)
console.log(
  `Array have ${Arrays.size()} rows\nFirst element is ${Arrays.firstElementSize()} length\nSecond passion is ${Arrays.secondPassion()}`
);

// Welcome message
console.log(welcome("Aubert", "Jean-Luc"));

// Some BMI
const persons = [];
const jl = new BodyMassIndex();
jl.setName("Jean-Luc");
jl.setSize(1.74);
jl.setWeight(72.5);
jl._calculerIMC();

const alison = new BodyMassIndex();
alison.setName("Alison");
alison.setWeight(135);
alison.setSize(1.89);
alison._calculerIMC();

persons.push(jl);
persons.push(new BodyMassIndex("Julien", 85, 1.9));
persons.push(alison);

persons.forEach(person => console.log(person.display()));

(function() {
  // your page initialization code here
  // the DOM will be available here
  stripChars();
  formSurvey();
})();

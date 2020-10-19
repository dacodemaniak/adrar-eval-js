let _lastName = "Aubert";
let _firstName = "Jean-Luc";

const initials = srcString => {
  if (srcString.indexOf("-") != -1) {
    return (
      srcString[0].toUpperCase() +
      srcString[srcString.indexOf("-") + 1].toUpperCase()
    );
  } else {
    return srcString[0].toUpperCase();
  }
};

export const welcome = (...who) => {
  let _welcome = [];
  _welcome.push(who[0]);
  _welcome.push(who[1]);

  // Extract initial from _lastName
  const lastNameInitial = initials(who[0]);
  const firstNameInitial = initials(who[1]);

  _welcome.push(lastNameInitial + firstNameInitial);

  return _welcome;
};

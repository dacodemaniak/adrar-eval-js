let _string = "";
let _stringLength = 0;
let _secondChar = "";
let _lastChar = "";

export const setString = srcString => {
  _string = srcString;
  _stringLength = srcString.length;
  _secondChar = srcString[1];
  _lastChar = srcString[_stringLength - 1];
};

export const size = () => _stringLength.toString();
export const secondChar = () => _secondChar;
export const lastChar = () => _lastChar;

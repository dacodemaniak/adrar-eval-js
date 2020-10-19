export const stripChars = () => {
  const formListener = document
    .getElementById("sample-form")
    .addEventListener("submit", event => {
      event.preventDefault();
      const voyelles = ["a", "e", "i", "o", "u", "y"];
      // Filter all voyelles from the textarea
      const stripped = [
        ...document.getElementById("user-text-input").value
      ].filter(char => voyelles.indexOf(char) == -1);
      console.log(stripped.join(""));
    });
};

const toggleError = (status, message) => {
  const error = document.querySelector("[error]");
  error.textContent = message;
  if (status) {
    error.classList.remove("invalid");
    error.classList.add("valid");
  } else {
    error.classList.remove("valid");
    error.classList.add("invalid");
  }
};

export const formSurvey = () => {
  const emailRegex = new RegExp("/S+@S+.S+/");
  const passwordRegex = new RegExp(
    "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/"
  );

  document.getElementById("login-form").addEventListener("keyup", event => {
    const currentField = event.target;
    const currentFieldValue = currentField.value;
    if (currentField.getAttribute("name") === "user-login") {
      if (!emailRegex.test(currentFieldValue)) {
        toggleError(false, "Your login is not valid");
      } else {
        toggleError(true, "Your login is valid");
      }
    } else {
      if (!passwordRegex.test(currentFieldValue)) {
        toggleError(false, "Password does not satisfied strength requirement");
      } else {
        if (currentField.value.length < 6 || currentField.value.length > 8) {
          toggleError(false, "Password does have a length between 6 and 8");
        } else {
          toggleError(true, "Everything is okay");
        }
      }
    }
  });
};

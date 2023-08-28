inputElArr = document.querySelectorAll(".form-input");
formBtnEl = document.querySelector(".form-btn");
errMsgEl = document.querySelectorAll(".error-msg");
emailEmptyErrEl = document.querySelector(".email-empty");
emailFailErrEl = document.querySelector(".email-fail");

const [zero, one, two, three] = Array.from(errMsgEl);

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    two.classList.remove("display");
    emailEmptyErrEl.classList.add("email-empty");
    emailFailErrEl.classList.remove("email-fail");
    return false;
  }
}

const inputChecker = function (e) {
  e.preventDefault();
  inputElArr.forEach(function (el) {
    if (!el.value) {
      if (el.id === "0") {
        zero.classList.remove("display");
      } else if (el.id === "1") {
        one.classList.remove("display");
      } else if (el.id === "2") {
        two.classList.remove("display");
        emailEmptyErrEl.classList.remove("email-empty");
      } else if (el.id === "3") {
        three.classList.remove("display");
      }
    }

    if (el.value && el.id === "2") {
      ValidateEmail(el.value);
    }
  });
};

formBtnEl.addEventListener("click", inputChecker);

inputElArr.forEach(function (el) {
  el.addEventListener("click", function () {
    if (el.id === "0") {
      zero.classList.add("display");
    } else if (el.id === "1") {
      one.classList.add("display");
    } else if (el.id === "2") {
      two.classList.add("display");
    } else if (el.id === "3") {
      three.classList.add("display");
    }
  });
});

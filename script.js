const form = document.querySelector(".card-info");
const inputArr = document.querySelectorAll("input");
const holder = document.querySelector(".card-holder-js");
const number = document.querySelector(".card-number-js");
const dateOne = document.querySelector(".card-date-one-js");
const dateTwo = document.querySelector(".card-date-two-js");
const cvc = document.querySelector(".cvc-input-js");
const holderView = document.querySelector(".card-holder-view");
const numberView = document.querySelector(".card-number-view");
const dateOneView = document.querySelector(".date-one");
const dateTwoView = document.querySelector(".date-two");
const cvcView = document.querySelector(".cvc-view");
const button = document.querySelector("button");
const compButton = document.querySelector(".complete-button");
const compMsg = document.querySelector(".complete-container");

const blankErr = `<p class="err-msg">Can't be blank</p>`;
const numberErr = ` <p class="err-msg">Wrong format, numbers only</p>`;

const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

function isNumber(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");

inputArr.forEach(function (val) {
  val.addEventListener("click", function () {
    val.style.borderColor = "hsl(270, 3%, 87%)";
    for (const i in val.parentNode.childNodes) {
      if (val.parentNode.childNodes[i]?.classList?.contains("err-msg")) {
        val.parentNode.childNodes[i].remove();
      }
    }
  });
});

holder.addEventListener("input", function () {
  holderView.textContent = holder.value;
  if (!holder.value) holderView.textContent = "Jane Appleseed";
});

number.addEventListener("input", () => {
  numberView.textContent = number.value = formatNumber(
    number.value.replaceAll(" ", "")
  );
  if (!number.value) numberView.textContent = "0000 0000 0000 0000";
});

dateOne.addEventListener("input", function () {
  dateOneView.textContent = dateOne.value;
  if (!dateOne.value) dateOneView.textContent = "00";
});
dateTwo.addEventListener("input", function () {
  dateTwoView.textContent = dateTwo.value;
  if (!dateTwo.value) dateTwoView.textContent = "00";
});
cvc.addEventListener("input", function () {
  cvcView.textContent = cvc.value;
  if (!cvc.value) cvcView.textContent = "000";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
let ok = 0;
button.addEventListener("click", function (e) {
  inputArr.forEach(function (input) {
    if (!input.value) {
      for (const i in input.parentNode.childNodes) {
        if (input.parentNode.childNodes[i]?.classList?.contains("err-msg")) {
          return;
        }
      }
      input.insertAdjacentHTML("afterend", blankErr);
      input.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
      ok++;
      console.log(ok);
    }

    if (input.dataset.id !== "holder") {
      if (!input.value.match(/^(?=.*\d)[\d ]+$/) && input.value) {
        for (const i in input.parentNode.childNodes) {
          if (input.parentNode.childNodes[i]?.classList?.contains("err-msg")) {
            return;
          }
        }

        input.insertAdjacentHTML("afterend", numberErr);
        input.style.borderColor = "hsl(0, 100%, 66%)";
      }
    } else {
      ok++;
      console.log(ok);
    }
  });

  if (ok === 6) {
    form.style.display = "none";
    compMsg.style.display = "flex";
    ok = 0;
  } else {
    ok = 0;
  }
});

compButton.addEventListener("click", function () {
  form.style.display = "grid";
  compMsg.style.display = "none";
  inputArr.forEach((x) => (x.value = ""));
  ok = 0;
  holderView.textContent = "Jane Appleseed";
  numberView.textContent = "0000 0000 0000 0000";
  dateOneView.textContent = "00";
  dateTwoView.textContent = "00";
  cvcView.textContent = "000";
});

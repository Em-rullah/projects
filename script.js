const btnEl = document.querySelector(".cta-btn");
const inputEl = document.querySelector("input");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const errorMsg = document.createElement("p");
errorMsg.classList.add("error-msg");
errorMsg.innerHTML = "Please enter a valid email addresss";
btnEl.addEventListener("click", function () {
  if (inputEl.value.match(mailFormat)) {
    return;
  } else {
    document.querySelector("form").appendChild(errorMsg);
  }
});

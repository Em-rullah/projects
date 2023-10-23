const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const adviceBtn = document.querySelector(".advice-button");

let id, advice;

const fetchingData = async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error("Something went wrong");

    const data = await response.json();

    id = data.slip.id;
    advice = data.slip.advice;

    adviceId.textContent = id;
    adviceText.textContent = advice;
  } catch (err) {
    console.error(err.message);
  }
};

adviceBtn.addEventListener("click", fetchingData);

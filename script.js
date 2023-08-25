const rating1El = document.querySelector("#one");
const rating2El = document.querySelector("#two");
const rating3El = document.querySelector("#three");
const rating4El = document.querySelector("#four");
const rating5El = document.querySelector("#five");

const btnEl = document.querySelector(".submit-btn");
const ratingPartEl = document.querySelector(".rating-part");
const thanksPartEl = document.querySelector(".thanks-part");
const ratingText = document.querySelector(".sub-heading-text");

const el = Array.from(document.querySelectorAll(".rating"));

let rating;

el.forEach((cur, i, arr) => {
  cur.addEventListener("click", function () {
    if (el.some((x) => x.classList.contains("clicked-rating"))) {
      el.forEach((cur) => {
        cur.classList.remove("clicked-rating");
        cur.classList.remove("pointer");
        cur.classList.remove("disable-hover");
      });
    }

    if (!cur.classList.contains("clicked-rating")) {
      cur.classList.add("disable-hover");
      cur.classList.add("pointer");
      cur.classList.add("clicked-rating");
      rating = i + 1;
    }

    console.log(rating);
  });
});

btnEl.addEventListener("click", function () {
  ratingPartEl.classList.toggle("display");
  thanksPartEl.classList.toggle("display");
  ratingText.innerText = `You selected ${rating} out of 5`;
});

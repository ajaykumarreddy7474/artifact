let maintitle = document.getElementById("maintitle");
let mh1 = maintitle.querySelector("h2");
let originalText = mh1.textContent;

let value = 100;
[...Array(originalText.length)].map((_, index) => {
  setTimeout(() => {
    mh1.textContent = originalText.substring(0, index + 1);
  }, value + index * 100);
});
/* ------------------------------------ - ----------------------------------- */
let subHeading = document.getElementById("subHeading");
let subx = subHeading.querySelector("h1");
let subText = subx.textContent;

let subValue = 100;
[...Array(subText.length)].map((_, index) => {
  setTimeout(() => {
    subx.textContent = subText.substring(0, index + 1);
  }, subValue + index * 20);
});

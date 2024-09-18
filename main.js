const inputE1 = document.querySelector("[chak-input]");
const buttonE1 = document.querySelector("[chak-btn]");
const chipE1 = document.querySelector("[chak-chip]");

inputE1.addEventListener("keypress", (e) => {
  console.log(e.keyCode);
});

console.log(buttonE1);
buttonE1.addEventListener("click", () => {
  alert("Hey");
});

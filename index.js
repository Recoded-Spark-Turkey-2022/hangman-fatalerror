const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// toUpper = function (alphabet) {
//   return alphabet.toUpperCase();
// };
// array2 = array2.map(toUpper);

let letterList = document.getElementById("letterList");
alphabet.forEach((item) => {
  item.toUpperCase();
  let li = document.createElement("li");
  li.innerHTML = item;
  letterList.appendChild(li);
  li.setAttribute("id", item);
  li.className = "bg-red-400 p-3 rounded w-5  text-white";
});

let kelime = "anahtar";
const kelimeninharfleri = kelime.split("");
//console.log(kelimeninharfleri);
const letters = document.querySelector(".letter");
alphabet.forEach((alphabet) => {
  letters.innerHTML += `<li class="kutu" id=${alphabet} onClick="reply_click(this.id)">${alphabet}</li>`;
});
console.error(letters);

// <!--****** kelimeleri seçilen idexe göre yerleştirme start**** -->

function reply_click(clicked_id) {
  let secilenharf = clicked_id;
  let secilenharfler = [];
  secilenharfler.push(secilenharf);
  let result = document.querySelector(".word");
  let a = kelimeninharfleri.filter((item) => secilenharfler.includes(item));
  result.innerHTML = `<span>${a}</span>`;
  console.error(a);
  //console.error(secilenharfler);
  //console.error(secilenharf);
  //console.error(kelime.includes(secilenharf))
}
// <!--***** kelimeleri seçilen idexe göre yerleştirme end***** -->

// const hintButton = document.getElementById("hint-button");
// const playAgain = document.getElementById("play-again-button");

// hintButton.addEventListener("click", () => {});
// playAgain.addEventListener("reset");

// function logReset(event) {
//   log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
// }

const form = document.getElementById("form");
//const log = document.getElementById("log");
form.addEventListener("reset");

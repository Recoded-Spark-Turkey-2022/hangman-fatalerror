const url = "https://random-word-api.herokuapp.com/word?number=1";
const letters = [];

const ul = document.createElement("ul"); //created to put letters of random word in
document.querySelector(".letters-list").appendChild(ul);

ul.className = "flex items-center justify-center h-36 p-3 gap-4 flex-wrap";
ul.style.listStyle = "none";

fetch(url)
  .then((resp) => resp.json())
  .then((randomWord) => {
    console.log(randomWord[0]); //can be deleted later, created for test purposes

    //created an array consist of letters of random word
    for (let i = 0; i < randomWord[0].length; i++) {
      letters.push(randomWord[0].charAt(i)); //can be deleted later, created for test purposes
      const li = document.createElement("li");
      li.textContent = "_";
      li.classList = `${letters[i]} w-10`;
      ul.appendChild(li);
    }
    console.log(letters);

    //Hint button start//

    const hintBtn = document.getElementById("hintBtn");

    hintBtn.addEventListener("click", (e) => {
      e.preventDefault();

      function generateHint(){
        const randomIndex = Math.floor(Math.random() * letters.length);
        console.log("random number => " + randomIndex);
  
        const selectedLi = document.querySelector(
          `ul :nth-child(${randomIndex + 1})`
        );

        if (selectedLi.id == "opened") {
          generateHint()
        } else {
          selectedLi.textContent = letters[randomIndex];
          selectedLi.id = "opened";
  
          const alpUl = document.querySelector(`#ulAlp`).childNodes
  
            for(let i = 0 ; i < alpUl.length; i ++){
              if(alpUl[i].firstChild.textContent == selectedLi.textContent){
                alpUl[i].firstChild.disabled = 'true'
                alpUl[i].firstChild.classList = 'flex items-center justify-center h-36 p-3  flex-wrap p-3 rounded w-5  text-white bg-orange-600'
            }
          }
        }
      }
      
      generateHint()
      
    });

    //Hint button end//
  });

const ulOfAlphabet = document.createElement("ul");
ulOfAlphabet.type = "none";
ulOfAlphabet.className =
  "flex items-center justify-center h-36 p-3 gap-4 flex-wrap";
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
const div = document.getElementById("flex");
div.appendChild(ulOfAlphabet);

// counter start
let counter = 10;
let counterHangmen = 0;

let lives = document.querySelector("#lives");
if (counter > 0) {
  lives.textContent = `You have ${counter} lives`;
} else {
  lives.textContent = "Game Over";
}

// counter end

alphabet.forEach((element) => {
  const liOfAlphabet = document.createElement("li");
  const btnOfAlphabet = document.createElement("button");
  btnOfAlphabet.textContent = element;
  btnOfAlphabet.style.width = "3em";
  btnOfAlphabet.className =
    "flex items-center justify-center h-36 p-3  flex-wrap bg-red-400 p-3 rounded w-5  text-white";

  btnOfAlphabet.addEventListener("click", () => {
    let isAnswerTrue = true;

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] == btnOfAlphabet.textContent) {
        btnOfAlphabet.disabled = "true";
        btnOfAlphabet.style.background = "green";
        isAnswerTrue = true;

        document.querySelectorAll(`.${letters[i]}`).forEach((letter) => {
          letter.textContent = letters[i];
        });
        break;
      } else {
        btnOfAlphabet.disabled = "true";
        btnOfAlphabet.style.background = "blue";
        isAnswerTrue = false;
      }
    }

    if (isAnswerTrue == false) {
      counter--;
      counterHangmen++;
      document.querySelector(`#a${counterHangmen}`).style.visibility =
        "visible";
      if (counter > 0) {
        lives.textContent = `You have ${counter} lives`;
      } else {
        alert("You just killed a man!");
        lives.textContent = "Game Over";
        setTimeout(window.location.reload(), 5000);
      }
    } else {
      lives.textContent = `You have ${counter} lives`;
    }
  });
  ulOfAlphabet.id = 'ulAlp'
  liOfAlphabet.appendChild(btnOfAlphabet);
  ulOfAlphabet.appendChild(liOfAlphabet);
});
document.querySelector(".letters-list").appendChild(ulOfAlphabet);

// reload button start //
let reload = document.querySelector("#reset");
reload.addEventListener("click", () => {
  window.location.reload();
});
// reload button  end//

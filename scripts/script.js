const url = 'https://random-word-api.herokuapp.com/word?number=1'
const letters = []
const ul = document.createElement('ul') //created to put letters of random word in
    ul.style.listStyle = "none"
document.querySelector('body').appendChild(ul)    

fetch(url)
.then(resp => resp.json())
.then(randomWord => {
    console.log(randomWord[0]) //can be deleted later, created for test purposes

//created an array consist of letters of random word
for(let i = 0; i < randomWord[0].length; i++){
    letters.push(randomWord[0].charAt(i)) //can be deleted later, created for test purposes

    const li = document.createElement('li')
    li.textContent = '_'
    li.classList = letters[i]
    ul.appendChild(li)
    
}
console.log(letters)



})


const ulOfAlphabet = document.createElement('ul')
    ulOfAlphabet.type = 'none'
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

alphabet.forEach(element => {
    const liOfAlphabet = document.createElement('li')
    const btnOfAlphabet = document.createElement('button')
        btnOfAlphabet.textContent = element
        btnOfAlphabet.style.width = '3em'

        btnOfAlphabet.addEventListener('click', () => {
            for(let i = 0; i < letters.length; i++){
                if(letters[i] == btnOfAlphabet.textContent){
                    btnOfAlphabet.disabled = 'true'
                    btnOfAlphabet.style.background = 'green'

                document.querySelectorAll(`.${letters[i]}`).forEach(letter => {
                    letter.textContent = letters[i]
                })

                }else{
                    btnOfAlphabet.disabled = 'true'


            }
            }
        })

    liOfAlphabet.appendChild(btnOfAlphabet)
    ulOfAlphabet.appendChild(liOfAlphabet)    
})
document.querySelector('body').appendChild(ulOfAlphabet)


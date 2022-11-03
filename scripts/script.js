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
    li.textContent = randomWord[0].charAt(i).toUpperCase()
    ul.appendChild(li)
    
}
console.log(letters)



})
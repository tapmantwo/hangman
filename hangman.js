const word = 'cheese'
let gameOver = false
const correctGuesses = []
const incorrectGuesses = []
function SetUpWord() {
    const list = document.getElementById('word')
    DeleteChildren(list)
    for(let i = 0; i < word.length; i++) {
        const item = document.createElement('li')
        if(correctGuesses.includes(word[i])) {
            const value = document.createTextNode(word[i])
            item.appendChild(value)
        }else{
        const value = document.createTextNode('\u00A0')
        item.appendChild(value)
        }
        list.appendChild(item)
    }
}

function DeleteChildren(element) {
    while(element.firstChild) {
        element.removeChild(element.lastChild)
    }
}

function LetterGuessed(letter) {
    if(gameOver === false) {
        if(word.includes(letter)) {
            correctGuesses.push(letter)
        }else if(!incorrectGuesses.includes(letter)){
            incorrectGuesses.push(letter)
        }
        if(incorrectGuesses.length === 7) {
            gameOver = true
        }
    }}
}

function SetUpIncorrectGuesses() {
    const list = document.getElementById('incorrect')
    DeleteChildren(list)
    for(let i = 0; i < incorrectGuesses.length; i++) {
        const item = document.createElement('li')
        const value = document.createTextNode(incorrectGuesses[i])
        item.appendChild(value)
        list.appendChild(item)
    }
}

function UpdateGame() {
    SetUpWord();
    SetUpIncorrectGuesses();
    SetUpImage();
}

function SetUpImage() {
    const image = document.getElementById('images')
    image.src = incorrectGuesses.length + 1 + ".jpg"
}
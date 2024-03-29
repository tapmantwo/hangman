
const words = [
    "apple",
    "arrow",
    "beach",
    "bench",
    "bible",
    "bread",
    "brick",
    "brush",
    "chair",
    "child",
    "church",
    "cloud",
    "coast",
    "earth",
    "field",
    "flower",
    "forest",
    "fruit",
    "glass",
    "glove",
    "grape",
    "grass",
    "guide",
    "heart",
    "horse",
    "house",
    "island",
    "knife",
    "lemon",
    "light",
    "market",
    "melon",
    "money",
    "month",
    "mount",
    "mouse",
    "music",
    "night",
    "ocean",
    "paint",
    "paper",
    "phone",
    "plane",
    "plant",
    "plate",
    "puppy",
    "rabbit",
    "river",
    "robot",
    "rocky",
    "salad",
    "shark",
    "shirt",
    "sight",
    "skirt",
    "slope",
    "smile",
    "snake",
    "space",
    "sugar",
    "table",
    "teeth",
    "tiger",
    "title",
    "torch",
    "train",
    "valve",
    "voice",
    "water",
    "wheel",
    "window",
    "woman",
    "world",
    "yacht",
    "zebra"
  ]
  
const gameStates = {playing:0, won:1, lost:2}
const word = PickWord()
console.log(word)
let currentState = gameStates.playing
const correctGuesses = []
const incorrectGuesses = []
function RenderWord() {
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

function CheckIfWordIsGuessed() {
    for(let i = 0; i < word.length; i++) {
        if(!correctGuesses.includes(word[i])) {
            return false
        }
        
    }
    return true
    
}

function LetterGuessed(letter) {
    const charCode = letter.charCodeAt(0);
    if(charCode < 97 || charCode > 122 || letter.length > 1) {
        return
    }
    if(currentState === gameStates.playing) {
        if(word.includes(letter)) {
            correctGuesses.push(letter)
            if(CheckIfWordIsGuessed()) {
                currentState = gameStates.won
            }
        }else if(!incorrectGuesses.includes(letter)){
            incorrectGuesses.push(letter)
        }
        if(incorrectGuesses.length === 7) {
            currentState = gameStates.lost
        }
    }
}

function RenderIncorrectGuesses() {
    const list = document.getElementById('incorrect')
    DeleteChildren(list)
    for(let i = 0; i < incorrectGuesses.length; i++) {
        const item = document.createElement('li')
        const value = document.createTextNode(incorrectGuesses[i])
        item.appendChild(value)
        list.appendChild(item)
    }
}

function ShowGameOver() {
    const gameOverScreen = document.getElementById("game over")
    gameOverScreen.style.display = 'block'
    const lostWord = document.getElementById("lost word")
    lostWord.innerText = word
}

function HideGameOver() {
    const gameOverScreen = document.getElementById("game over")
    gameOverScreen.style.display = 'none'
}

function ShowGameWon() {
    const gameWonScreen = document.getElementById("game won")
    gameWonScreen.style.display = 'block'
    const wonWord = document.getElementById("won word")
    wonWord.innerText = word
}

function HideGameWon() {
    const gameWonScreen = document.getElementById("game won")
    gameWonScreen.style.display = 'none'
}

function RenderGame() {
    RenderWord();
    RenderIncorrectGuesses();
    RenderImage();
    if(currentState === gameStates.lost) {
        ShowGameOver();
    }else if(currentState === gameStates.won){
        ShowGameWon();
    }else{
        HideGameOver();
        HideGameWon();
    }
}

function RenderImage() {
    const image = document.getElementById('images')
    image.src = incorrectGuesses.length + 1 + ".jpg"
}

function PickWord() {
    const randomWord = Math.floor((Math.random() * words.length - 1));
    return words[randomWord]
}
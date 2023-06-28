
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
  
const word = PickWord()
console.log(word)
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
    const charCode = letter.charCodeAt(0);
    if(charCode < 97 || charCode > 122 || letter.length > 1) {
        return
    }
    if(gameOver === false) {
        if(word.includes(letter)) {
            correctGuesses.push(letter)
        }else if(!incorrectGuesses.includes(letter)){
            incorrectGuesses.push(letter)
        }
        if(incorrectGuesses.length === 7) {
            gameOver = true
        }
    }
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

function PickWord() {
    const randomWord = Math.floor((Math.random() * words.length - 1));
    return words[randomWord]
}
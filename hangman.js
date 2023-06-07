function SetUpWord() {
    const word = 'cheese'
    const list = document.getElementById('word')
    for(let i = 0; i < word.length; i++) {
        const item = document.createElement('li')
        const value = document.createTextNode('\u00A0')
        item.appendChild(value)
        list.appendChild(item)
    }
}
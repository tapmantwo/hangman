function SetUpWord() {
    const word = 'cheese'
    const list = document.getElementById('word')
    for(let i = 0; i < word.length; i++) {
        const item = document.createElement('li')
        const value = document.createTextNode('&nbsp;')
        item.appendChild(value)
        list.appendChild(item)
    }
}
var fs = require('fs')
// Renderer Process 
window.onload = function() {
    var btn = this.document.querySelector('#btn')
    var skills = this.document.querySelector('#skills')
    btn.onclick = function() {
        fs.readFile('message.txt', (err, data) => {
            skills.innerHTML = data
        })
    }
}
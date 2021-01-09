const btn = this.document.querySelector("#btn")
const BrowserWindow = require('electron').remote.BrowserWindow // electron remote module

window.onload = () => {
    btn.onclick = () => {
        newWin = new BrowserWindow({
            width: 500,
            heoght: 500
        })
        newWin.loadFile('yellow.html')
        newWin.on('close', () => {
            newWin = null
        })
    }
}
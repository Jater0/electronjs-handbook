const btn = this.document.querySelector("#btn")
const btn02 = this.document.querySelector("#btn02")
const BrowserWindow = require('electron').remote.BrowserWindow // electron remote module

window.onload = () => {
    btn.onclick = () => {
        newWin = new BrowserWindow({
            width: 500,
            height: 500
        })
        newWin.loadFile('yellow.html')
        newWin.on('close', () => {
            newWin = null
        })
    }
    btn02.onclick = () => {
        var newWin = new BrowserWindow({
            width: 500,
            height: 500,webPreferences: {
                nodeIntegration: true, 
                enableRemoteModule: true
            }
        })
        newWin.loadFile('index.html')
        newWin.on('close', () => {
            newWin = null
        })
    }
}
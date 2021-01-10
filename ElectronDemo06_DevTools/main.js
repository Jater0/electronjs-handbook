var {app, BrowserWindow} = require('electron')
var mainWindow = null

app.on('ready', () => { // action 'ready'
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 800,
        webPreferences: {
            nodeIntegration: true, 
            enableRemoteModule: true
        }
    }) // set up browser window
    mainWindow.webContents.openDevTools()
    require("./main/menu.js")
    mainWindow.loadFile('index.html') // load index.html
    mainWindow.on('close', () => { // action 'close'
        mainWindow = null // reset main window to close
    })
})
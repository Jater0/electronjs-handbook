const {BrowserWindow, app} = require('electron')
const { platform } = require('process')

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
})

app.on('window-all-closed', () => {
    if (platform !== 'darwin') {
        app.quit()
    }
})

const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
        nativeWindowOpen: true
    }
})

mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
    if (frameName === 'model') {
        event.preventDefault()
        Object.assign(options, {
            modal: true,
            parent: mainWindow,
            width: 100,
            height: 100
        })
        event.newGuest = new BrowserWindow(options)
    }
})
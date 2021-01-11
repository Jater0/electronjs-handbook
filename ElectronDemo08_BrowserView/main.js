const {BrowserView, BrowserWindow, app} = require('electron')

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    const view = new BrowserView({
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    win.setBrowserView(view)
    view.setAutoResize({width: true, height: true, horizontal: false, vertical: true})
    view.setBounds({x: 500, y: 500, width: 300, height: 300})
    view.webContents.loadURL('https://electronjs.org')
    win.loadFile('index.html')
})
const {Menu, BrowserWindow} = require('electron')

var template = [
    {
        label: 'JaterSkill',
        submenu: [
            {
                label: 'Java',
                accelerator: 'ctrl + n', // shortcut
                click: () => {
                    var win = new BrowserWindow({
                        width: 500,
                        height: 500, 
                        webPerferences: {nodeIntegration: true}
                    })
                    win.loadFile('java.html')
                    win.on('close', () => {
                        win = null
                    })
                }
            },
            {label: 'JavaScript'}
        ]
    }, 
    {
        label: 'Sport',
        submenu: [
            {label: 'football'},
            {label: 'basketball'}
        ]
    }
]

var m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)
const {Menu, BrowserWindow} = require('electron')

var template = [
    {
        label: 'JaterSkill',
        submenu: [
            {label: 'Java'},
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
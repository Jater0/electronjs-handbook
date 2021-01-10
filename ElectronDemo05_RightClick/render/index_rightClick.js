const {remote} = require('electron')
var rightClick = [
    {
        label: 'Paste',
        accelerator: 'ctrl + v'
    },
    {
        label: 'Copy',
        accelerator: 'ctrl + c'
    }
]

var menu = remote.Menu.buildFromTemplate(rightClick)

window.addEventListener('contextmenu', function(e) {
    e.preventDefault()
    menu.popup({window:remote.getCurrentWindow()})
})
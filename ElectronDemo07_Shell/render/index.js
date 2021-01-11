const {shell} = require('electron')
var btn01 = document.querySelector('#btn01')
var btn02 = document.querySelector('#btn02')
var btn03 = document.querySelector('#btn03')
var btn04 = document.querySelector('#btn04')
var btn05 = document.querySelector('#btn05')
var btn06 = document.querySelector('#btn06')
var btn07 = document.querySelector('#btn07')
var aHref01 = document.querySelector('#aHref01')

/**
 * shell.openExternal(url[, options])
 * - url: string - Max 2081 characters on windows
 * - options: Objects
 *      - [macOS]activate: Boolean(optional) - "true" to bring the opened application to the forground. Default true
 *      - [Windows]workingDirectory: String(optional) - The working directory
 * Open the given external protocol in the desktop's default manner.(For example, mailto: URLs in the user's default mail agent)
 */
btn01.onclick = (e) => {
    e.preventDefault()
    var href = aHref01.getAttribute('href')
    if (process.platform === "darwin") {
        shell.openExternal(href, true) // opening a URL in the user's default browser
    } else {
        shell.openExternal(href)
    }
}

/**
 * show the entry item in a File manager. If possible, select the file
 * like address "/home/jater", so show the folder 'jater' in the File Manager
 */
btn02.onclick = (e) => {
    e.preventDefault()
    shell.showItemInFolder("/home/jater")
}

/**
 * Opens the given file in the desktop default manner
 */
btn03.onclick = (e) => {
    e.preventDefault()
    shell.openPath("/home/jater/lang.txt")
}

/**
 * move the given file to trash and returns a boolean status for the operation
 * shell.moveItemToTrash(fullPath[, deleteOnFail])
 * - fullPath: String
 * - [macOS] deleteOnFail: Boolean(optional) - whether or not to unilaterally remove the item if the Trash is disabled or unsupported on the volume
 */
btn04.onclick = (e) => {
    e.preventDefault()
    shell.moveItemToTrash("/home/jater/Workspaces/ElectronProjects/ElectronDemo07_Shell/message.txt")
}

/**
 * Play the beep sound, but i can't hear anything lol 
 */
btn05.onclick = (e) => {
    e.preventDefault()
    shell.beep()
}

/**
 * This api working for Windows System
 * Creates and updates a shortcut link at 'shortcutPath'
 * [Windows]shell.writeShortcutLink(shortcutPath[, operation], options)
 * - shortcutPath: String
 * - operation: String(optional) - Default is 'create', can be one of following:
 *      - create - creates a new shortcut, overwriting if necessary
 *      - update - Updates specified properties only an existing shortcut
 *      - replace - Overwrites an existing shortcut, fails if the shortcut doesn't exist
 * - options: ShortcutDetails
 */
btn06.onclick = (e) => {
    e.preventDefault()
    shell.writeShortcutLink("/home/jater/zzz.txt", "create")
}

/**
 * Resolves the shortcut link at 'shortcutPath'
 */
btn07.onclick = (e) => {
    e.preventDefault()
    var readsc = shell.readShortcutLink("/home/jater/zzz.txt")
    console.log(readsc)
}
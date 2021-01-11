var btn = document.querySelector('#btn')
var mytext = document.querySelector('#mytext')

btn.onclick = (e) => {
    window.open('popup_page.html', '_blank', 'nodeIntegration=yes')
}

window.addEventListener('message', (msg) => {
    mytext.innerHTML = JSON.stringify(msg)
})
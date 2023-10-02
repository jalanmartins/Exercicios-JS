function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20;
    msg.innerHTML = `Agora são ${hora} horas.<br/>`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanhã.png'
        msg.innerHTML += 'Bom dia!'
        document.body.style.background = '#f3f4f7'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        msg.innerHTML += 'Boa tarde!'
        document.body.style.background = '#fe8807'
    } else {
        img.src = 'fotonoite.png'
        msg.innerHTML += 'Boa noite!'
        document.body.style.background = '#000c16'
    }
}
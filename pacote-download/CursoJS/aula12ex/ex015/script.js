function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoformulario = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (anoformulario.value.length == 0 || anoformulario.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoformulario.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 2) {
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade >= 2 && idade < 12) {
                img.setAttribute('src', 'criançamenino.png')
            } else if (idade >= 12 && idade < 18) {
                img.setAttribute('src', 'adolescentehomem.png')
            } else if (idade >= 18 && idade < 29) {
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade >= 29 && idade < 65) {
                img.setAttribute('src', 'adultohomem.png')
            } else {
                img.setAttribute('src', 'idosohomem.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >=0 && idade < 2) {
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade >= 2 && idade < 12) {
                img.setAttribute('src', 'criançamenina.png')
            } else if (idade >= 12 && idade < 18) {
                img.setAttribute('src', 'adolescentemulher.png')
            } else if (idade >= 18 && idade < 29) {
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade >= 29 && idade < 65) {
                img.setAttribute('src', 'adultamulher.png')
            } else {
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos de idade.</br>`
        res.appendChild(img)
    }

}
function calcular() {
    let num = document.getElementById('txtn').value
    let res = document.getElementById('seltab')
    if (num == 0) {
        window.alert('[ERRO] Por favor, digite um número.')
    } else {   
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) { //utilizando for
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            res.appendChild(item)
        }

        /*let c = 1         utilizando while
        res.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            res.appendChild(item)
            c++
        } */
    } 
}
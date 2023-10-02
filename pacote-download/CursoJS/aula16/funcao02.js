/*function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2, 5))
Essa forma de fazer pode trazer um problema, pois
se alguns dos parâmetros não foram colocados, o
resultado será NaN*/

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}
console.log(soma(2))
/*Dessa forma mesmo que um dos parâmetros não seja colocado, a "vaga"
dele será preenchida com 0 */
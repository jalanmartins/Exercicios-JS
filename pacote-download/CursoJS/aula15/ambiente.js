let num = [5, 9, 8, 1, 2]
num.sort()  //coloca em ordem os valores da array
console.log(`Nosso vetor é o ${num}.`)
console.log(`Nosso array tem ${num.length} posições.`)
console.log(`O terceiro valor do vetor é ${num[2]}.`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log('Valor não encontrado.')
} else {
    console.log(`O valor está na posição ${pos}.`)
}
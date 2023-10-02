let num = [8, 1, 9, 7, 2, 6]

//console.log(num)

/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
*/

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
*/
for (let pos in num) {  //"para cada posição dentro da array num"
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
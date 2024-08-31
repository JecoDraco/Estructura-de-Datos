/*Realizar un programa que contenga un arreglo indefinido en el que solicite a travez de teclado 
el tamañp y se ingrese por lo menos 4 valores cpn un ciclo de cualquier tipo, imprimir los valores en pantalla*/
const prompt = require('prompt-sync')()

console.log("Dime el tamaño del arreglo")
//let tamaño = parseInt(prompt("Tamaño:"))
let objetos = parseInt(prompt("Numero de objetos:"))
let a = []
let objeto;
let i = 0
let numero = 0

/*do{
    numero = parseInt(prompt("Numero:"))
    a.push(numero)
    i++
}while(i<tamaño)*/

do{
    let nombre = prompt("Nombre:")
    let edad = prompt("Edad:")

    objeto={
        nombre,
        edad
    }
    a.push(objeto)
    i++
}while(i<objetos)

console.log(a)
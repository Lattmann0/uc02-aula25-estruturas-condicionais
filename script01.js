//Escreva um programa que diga se o número informado pelo usuário é par ou ímpar 
//Imprima o número e o resultado

const divRoot = document.getElementById ("root")

const numero = Number(prompt("Informe um número"))

const resto = numero % 2

let mensagem = ""

console.log(resto)

if (resto === 0) {
    mensagem = `${numero} é par.`
}   else {
    mensagem = `${numero} é impar.`
}

divRoot.appendChild(document.createTextNode(mensagem))
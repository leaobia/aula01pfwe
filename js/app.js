'use strict'

const calcular = document.getElementById('calcular')

calcular.addEventListener('click', somar)

/*function somar() {
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const formulario = document.getElementById('formulario')
     const resultado = Number(numero1) + Number(numero2)/2
    document.getElementById('resultado1').value = Number(numero1) + Number(numero2)

    formulario.classList.add('sombra-vermelha')
}*/
const nota1 = document.getElementById('nota1').value
const nota2 = document.getElementById('nota2').value
const teste = document.getElementById('teste')

function somar() {
    const nota1 = document.getElementById('nota1').value
    const nota2 = document.getElementById('nota2').value
    const formulario = document.getElementById('formulario')

    const resultado = (Number(nota1) + Number(nota2)) / 2

    const inputNota1 = document.getElementById('nota1')
    const inputNota2 = document.getElementById('nota2')
    const inputSituacao = document.getElementById('situacao')

    document.getElementById('situacao').value = resultado


    if (nota1 >= 5) {
        inputNota1.classList.add('notaAzul')
        inputNota1.classList.remove('notaVermelha')
    } else {
        inputNota1.classList.remove('notaAzul')
        inputNota1.classList.add('notaVermelha')
    }
    if (nota2 >= 5) {
        inputNota2.classList.add('notaAzul')
        inputNota2.classList.remove('notaVermelha')
    } else {
        inputNota2.classList.remove('notaAzul')
        inputNota2.classList.add('notaVermelha')
    }

    if (resultado >= 5) {
        document.getElementById('situacao').value = 'Aprovado!'
        inputSituacao.classList.add('notaAzul')
        inputSituacao.classList.remove('notaVermelha')
        formulario.classList.add('aprovado')
        formulario.classList.remove('reprovado')
    } else {
        document.getElementById('situacao').value = 'Reprovado!'
        inputSituacao.classList.add('notaVermelha')
        inputSituacao.classList.remove('notaAzul')
        formulario.classList.add('reprovado')
        formulario.classList.remove('aprovado')
    }
}




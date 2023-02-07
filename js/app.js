'use strict'

const calcular = document.getElementById('calcular')

calcular.addEventListener('click', somar)


function somar() {
    const nota1 = document.getElementById('nota1').value.replace(',', '.')
    const nota2 = document.getElementById('nota2').value.replace(',', '.')
    const formulario = document.getElementById('formulario')

    const resultado = (Number(nota1) + Number(nota2)) / 2

    const inputNota1 = document.getElementById('nota1')
    const inputNota2 = document.getElementById('nota2')
    const inputSituacao = document.getElementById('situacao')

    document.getElementById('situacao').value = resultado

    if (nota1 == '' || nota2 == '') {
        document.getElementById('situacao').value = 'Entradas vazias!'

    } else if (
        isNaN(nota1) || isNaN(nota2)
    ) {
        document.getElementById('situacao').value = 'Digite números'

    } else if (
        nota1 > 10 || nota2 > 10 || nota1 < 0 || nota2 < 0
    ) {
        document.getElementById('situacao').value = 'Notas só até 10!'
    }

    else {
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

    if (nota1 >= 5 ) {
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

}





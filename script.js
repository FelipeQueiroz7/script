function mediaAluno(){

// lógica de programação
// problema: receber 3 notas de um aluno,
// calcular e apresentar a média e o resultado
// se o aluno foi aprovado ou não.

console.log('testando o console');


const nota1 = parseInt(document.getElementById('nota1').value);
const nota2 = parseInt(document.getElementById('nota2').value);
const nota3 = parseInt(document.getElementById('nota3').value);


// calculo da média
const media = (nota1 + nota2 + nota3) / 3;

document.getElementById('resultado').innerHTML = 'a média do aluno é: ' + media +
'<br>';


if (media >= 7) {    
    document.getElementById('resultado').innerHTML += 'aprovado';    
} else if (media >= 5) {
    document.getElementById('resultado').innerHTML += 'exame';
} else {
    document.getElementById('resultado').innerHTML += 'reprovado';    
}


console.log('fim do programa');

}
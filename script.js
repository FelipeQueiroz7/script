// lógica de programação
// problema: receber 3 notas de um aluno,
// calcular e apresentar a média e o resultado
// se o aluno foi aprovado ou não.

console.log('testando o console');

let nota1;
let nota2;
let nota3;

nota1 = parseInt(prompt('digite a nota1:'));
nota2 = parseInt(prompt('digite a nota2:'));
nota3 = parseInt(prompt('digite a nota3:'));

console.log( 'a nota 1 é: ', nota1);
console.log( 'a nota 2 é: ', nota2);
console.log( 'a nota 3 é: ', nota3);

// calculo da média
media = (nota1 + nota2 + nota3) / 3;

console.log('a média do aluno é:', media);
console.log(media);

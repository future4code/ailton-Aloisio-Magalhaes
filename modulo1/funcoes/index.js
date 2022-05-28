//===Exercícios de interpretação de código====

/*
*---------questao 1-------------
//
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//
A) O que vai ser impresso no console?
	10
	50
B) O que aconteceria se retirasse os dois 
console.log e simplesmente invocasse a função 
minhaFuncao(2) e minhaFuncao(10)? O que 
apareceria no console?
	undefined
*---------questao 2-------------
//
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//
a. Explique o que essa função faz e qual é sua utilidade
transforma os caracteres em letras minusculas e diz True caso os caracteres
especificados estejam incluidos.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   Eu gosto de cenoura // true
ii. CENOURA é bom pra vista //true
iii. Cenouras crescem na terra //true
*/
//======Exercícios de escrita de código=========
//---------questao 1-------------
//A) A função não deve receber nenhum parâmetro e deve 
//imprimir uma mensagem falando algumas informações sobre você
//ex: "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou
// estudante."
//Troque o nome, idade, cidade e se é estudante ou não por
//informações sobre você. Lembrando que a função não possui
//entradas, apenas imprime essa mensagem.
let nome, idade, cidade, profissao;
nome = prompt("qual o seu nome?");
idade = prompt("qual sua idade?");
cidade = prompt("Onde voce mora?");
profissao = prompt("qual sua profissao?");
function imprimir(){console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)}
imprimir();
//B)  Agora escreva uma função que receba 4 parâmetros que 
//correspondem às informações de uma pessoa: o nome 
//(`string`), a idade (`number`), a cidade (`string`) e uma
//profissão (`string`).
//Ela deve retornar uma `string` que unifique todas as 
//informações da pessoa em uma só mensagem com o template:
//ex: Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

//---------questao 2----------
//A) funcao que soma e retorna resultado
function somar(numero1, numero2){console.log(numero1 + numero2)}
somar(2, 3);
//B) numero >= numero2 e retorna booleano
function quiz(numero1, numero2){console.log(numero1 >= numero2)}
quiz(2,3);
//C) numero par e retorna true
function quiz(numero1){console.log((numero1 % 2) === 0)}
quiz(3);
//D) recebe mensagem e imprimir tamanho + mensagem maiuscula
function imprimirTamanhoGrande(texto){console.log(texto.toUpperCase(), texto.length)}
imprimirTamanhoGrande("string");

//-------questao 3-------------
const numeros = [];
numeros[0] = Number(prompt("insira um numero"));
numeros[1] = Number(prompt("insira um numero"));
function operacoes(){console.log(
	`Numeros inseridos: ${numeros[0]} e ${numeros[1]}
	Soma: ${numeros[0] + numeros[1]}
	Diferenca: ${numeros[0] - numeros[1]}
	Multiplicacao: ${numeros[0] * numeros[1]}
	Divisao: ${numeros[0] / numeros[1]}
	`)};
operacoes();

//===========DESAFIOS==========
//--------questao 1--------
// variavel recebe parametros para executar a funcao
//A)
const imprimindo = (frase) => {console.log(frase);}
//B)
const recebeValores = (valor1, valor2) => {imprimindo(valor1 + valor2 );}
const imprimirValores = recebeValores(4, 5);

//--------questao 2----------
const recebeValores1 = (valor1, valor2) => {imprimindo(  ((valor1 ** 2) + (valor2 **2))**(1/2) );}
const imprimirValores1 = recebeValores1(3, 4);
//==========Exercícios de interpretação de código==========================
//------questao 1----------
/*
let array
console.log('a. ', array)	//undefined

array = null
console.log('b. ', array)	//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)	//11

let i = 0
console.log('d. ', array[i])	//0

array[i+1] = 19
console.log('e. ', array)	//0, 19

const valor = array[i+6]
console.log('f. ', valor)	//0, 19, 0, 0, 0, 0, 0
*/
//-------questao 2-----------
/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//"SUBI NUM ONIBUS EM MIRROCOS", 27
*/
//===============Exercícios de escrita de código============================

//------questao 1------------
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
const mensagens = [];
mensagens.push(prompt("Cadastre seu email no sistema \n Digite seu email no campo abaixo:"));
console.log(mensagens[0]);
mensagens.push(prompt("Digite seu nome de usuario"));
console.log(mensagens[1]);
alert(`O e-mail ${mensagens[0]} foi cadastrado com sucesso. Seja bem-vinda(o), ${mensagens[1]}!`);

//-------questao 2-----------
//Faça um programa que contenha um array com 5 das suas comidas preferidas,
// armazenado em uma variável. Em seguida, siga os passos:
const comidasPrediletas = ["macarrao","lasanha","escondidinho","pizza","hamburguer"];
//a) Imprima no console o array completo
console.log(comidasPrediletas);
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
// seguida por cada uma das comidas, uma embaixo da outra.
console.log(`Essas são as minhas comidas preferidas: \n${comidasPrediletas[0]}\n${comidasPrediletas[1]}\n${comidasPrediletas[2]}\n${comidasPrediletas[3]}\n${comidasPrediletas[4]}`);
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque
// a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
let comidaPrediletaUsuario = prompt("Digite uma comida preferida: ");
comidasPrediletas[1] = comidaPrediletaUsuario;
console.log(comidasPrediletas);

//--------questao 3------------ 
//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas = [];
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
listaDeTarefas.push(prompt("Responda as 3 questoes a seguir: \n1-Digite uma tarefa que voce precisa realizar hoje:"));
listaDeTarefas.push(prompt("2-Digite uma tarefa que voce precisa realizar hoje:"));
listaDeTarefas.push(prompt("3-Digite uma tarefa que voce precisa realizar hoje:"));
//c) Imprima o array no console
console.log(listaDeTarefas);
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2
let indiceNumerico = Number(prompt("Digite no campo abaixo o numero da tarefa ao qual voce concluiu,\n0, 1, 2:"));
//e) Remova da lista o item de índice que o usuário escolheu.
console.log(listaDeTarefas.splice(indiceNumerico, 1));
//f) Imprima o array no console
console.log(listaDeTarefas);

//=========DESAFIO============

//-------questao 1-----------
//Receba uma frase e retorne um array onde cada elemento é uma 
//das palavras da frase, ignorando os espaços
const palavras = [];
const frase = prompt("Digite o seu nome completo: ")
palavras.push(frase.trim());
console.log(palavras);
//-------questao 2-----------
//Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"],
//faça um programa que acha o índice da palavra Abacaxi e imprime tanto
//o índice quanto o tamanho do array
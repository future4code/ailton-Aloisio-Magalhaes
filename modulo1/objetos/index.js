'use strict';
//=====Exercícios de interpretação de código=====
//-----questao 1-----
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
*/
//a) O que vai ser impresso no console? 
//R -  "Matheus Nachtergaele" 
//		"Virginia Cavendish"
//		{canal: "Globo", horario: "14h"}

//-----questao 2-----
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
*/
//a) O que vai ser impresso no console?
//  R -	{nome: "Juca", idade: 3, raca: "SRD"}
//		{nome: "Juba", idade: 3, raca: "SRD"}
//		{nome: "Jubo", idade: 3, raca: "SRD"}
//
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//	R - copia o conteudo do objeto mencionado

//-----questao 3-----
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
*/
//a) O que vai ser impresso no console?
//	R - false
//		undefined
//		
//b) Explique o valor impresso no console. 
//Você sabe por que isso aconteceu?
//	R - No primeiro caso existe a chave e valor
// no segundo caso, nao existe a chave com nome "altura"
// por isso ele retorna um undefined

//=====Exercícios de escrita de código=====
//-----questao 1-----
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:
/*
// Exemplo de entrada
const pessoa = {nome: "Amanda", apelidos: ["Amandinha", "Mandinha", "Mandi"]}

// Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
*/
//
const pessoa = {nome: "Amanda", apelidos: ["Amandinha", "Mandinha", "Mandi"]};
function imprimirObjetos(objeto)
{
	console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`);
};
imprimirObjetos(pessoa);
const pessoa2 = {...pessoa};
pessoa2.apelidos[0] = "a";
pessoa2.apelidos[1] = "b";
pessoa2.apelidos[2] = "c";
imprimirObjetos(pessoa2);

//-----questao 2-----
//a) crie 2 objetos
const brasileiro = {nome:"Aloisio",idade:25,profissao:"estudante"};
const estrangeiro = {...brasileiro};
estrangeiro["nome"] = "bruno";
//b) funcao retorna array[] e array.length
function infoCidadao (objeto)
{
	const novoObjeto = {...objeto};
	const novoArray = [novoObjeto.nome,novoObjeto.idade,novoObjeto.profissao];
	console.log(`[${novoArray[0]}, ${novoArray[0].length}, ${novoArray[1]}, ${novoArray[2]}, ${novoArray[2].length}]`);
}; 
infoCidadao(brasileiro);

//-----questao 3-----
//a) crie 1 variavel array global
let carrinho = [];
//b) crie 3 objetos de frutas
const maca = {nome:"Maca", disponivel: true};
const pera ={...maca};
pera.nome = "Pera";
const uva = {...pera};
uva.nome = "Uva";
//c) funcao que recebe obj e salva no carrinho
function compras (objeto)
{
//carrinho.push(objeto.nome);
//carrinho.push(objeto.disponivel);
carrinho.push(objeto);
return console.log(carrinho);
};
compras(maca);
compras(pera);
compras(uva);

//=====DESAFIOS=====
//------questao 1------
function usuario(nome, idade, profissao)
{
/*	const objetoInfo = {nome: "", idade:0, profissao:""};
	objetoInfo["nome"] = nome;
	objetoInfo["idade"] = idade;
	objetoInfo["profissao"] = profissao;
*/
	const objetoInfo = {nome: nome, idade: idade, profissao: profissao};
	console.log(`{${objetoInfo.nome}, ${objetoInfo.idade}, ${objetoInfo.profissao} } valores salvos num (${typeof(objetoInfo)})`);
};
usuario("anne",24,"Redatora");

//------questao 2------
const filme = {nome:"", ano:0};
const acao = {...filme};
acao.nome = "Tron - O Legado";
acao.ano = 2010;
const infantil = {...filme};
infantil.nome = "Meu Malvado Favorito";
infantil.ano = 2010;
function listaFilmes(filme1, filme2)
{ 
const qa1 = (filme1.ano < filme2.ano);
const qa2 = (filme1.ano === filme2.ano);
console.log(`O primeiro filme foi lançado antes do segundo? ${qa1}
O primeiro filme foi lançado no mesmo ano do segundo? ${qa2}`);
};
listaFilmes(acao, infantil);

//-----questao 3-----
function disponivelFruta(fruta)
{
fruta.disponivel = !(fruta.disponivel);
console.log(fruta.disponivel);
};
disponivelFruta(uva);

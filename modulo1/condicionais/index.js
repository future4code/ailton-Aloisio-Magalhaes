//=====Exercícios de interpretação de código=====

//-----questao 1-----
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/
//a) Explique o que o código faz. Qual o teste que ele realiza? VERIFICA SE O NUMERO E PAR
//b) Para que tipos de números ele imprime no console "Passou no teste"? NUMEROS ONDE O RESTO E IGUAL A ZERO
//c) Para que tipos de números a mensagem é "Não passou no teste"? NUMEROS ONDE O RESTO E DIFERENTE DE ZERO

//-----questao 2-----
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/
//a) Para que serve o código acima? 
//CONDICAO LIMITANDO SAIDA DE INFO PARA O USUARIO
//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? 
//"O PRECO DA FRUTA MACA E R$ 3.5" 
//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//"O PRECO DA FRUTA PERA E R$ 5"

//-----questao 3-----
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/
//a) O que a primeira linha está fazendo? 
//SALVANDO VALOR NUMBER DE UMA STRING RECEBIDA PELO USUARIO
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//"ESSE NUMERO PASSOU NO TESTE" = 10
//ERROR = -10
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//SIM, NAO FOI DECLARADO UM PADRAO PARA NUMEROS NAO ACEITOS PELA CONDICAO PRINCIPAL

//=====Exercícios de escrita de código=====

//-----questao 1-----
//a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
const idade = Number(prompt("Digite a sua idade em numero."));
//b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
console.log(idade,typeof(idade),typeof(idade)==="number");
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
if(idade >= 18){console.log("Você pode dirigir");}else{console.log("Você não pode dirigir");};

//-----questao 2-----
//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
const turno = prompt("Voce estuda em qual desses turnos: digitar M (matutino) ou V (Vespertino) ou N (Noturno)");
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
if((turno.toUpperCase()) === "M"){
	console.log("Bom Dia!");
}else if((turno.toUpperCase()) === "V"){
	console.log("Bom Tarde!");
}else if((turno.toUpperCase()) === "N"){
	console.log("Bom Noite!");
}else{
	console.log("nao entendi seu turno");
};

//-----questao 3-----
//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
const turno1 = prompt("Voce estuda em qual desses turnos: manha, tarde, noite ?\ndigitar M (matutino) ou V (Vespertino) ou N (Noturno)");
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco SWITCH CASE
switch(turno1.toUpperCase()){
	case "M":
		console.log("Bom Dia!");
		break
	case "V":
		console.log("Bom Tarde!");
		break
	case "N":
		console.log("Bom Noite!");
		break
	default:
		console.log("Nao entendi!");
		break
};

//-----questao 4-----
//Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
//se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
//Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir
const perguntaAoClienteGeneroDeFilme = prompt("Qual o genero que deseja assistir?"); 
//e outra pergunta sobre o preço do ingresso,
const perguntaAoClientePrecoDeFilme = Number(prompt("Quais valores voce quer pagar pelo ingresso?")); 
//então verifique se seu amigo ou amiga vai topar assistir o filme.
const companhiaClienteAoCinema = ["fantasia",15];
//Caso positivo, imprima no console a mensagem: "Bom filme!",
if(perguntaAoClienteGeneroDeFilme === companhiaClienteAoCinema[0] && perguntaAoClientePrecoDeFilme < companhiaClienteAoCinema[1]){
	console.log("Bom Filme!");
}else{
	console.log("Escolha outro filme :(");
}; 

//=====DESAFIOS=====

//-----questao 1-----
//pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]"
let perguntaAoClienteGeneroDeFilme1 = prompt("Qual o genero que deseja assistir?"); 
let perguntaAoClienteLanche1 = prompt("qual lanchinho vai comprar?");
//e outra pergunta sobre o preço do ingresso,
const perguntaAoClientePrecoDeFilme1 = Number(prompt("Quais valores voce quer pagar pelo ingresso?")); 
//então verifique se seu amigo ou amiga vai topar assistir o filme.
const companhiaClienteAoCinema1 = ["fantasia",15];
//Caso positivo, imprima no console a mensagem: "Bom filme!",
if(perguntaAoClienteGeneroDeFilme1.toLowerCase() === companhiaClienteAoCinema1[0] && perguntaAoClientePrecoDeFilme1 < companhiaClienteAoCinema1[1]){
	console.log(`Bom Filme! e Aproveite o seu ${perguntaAoClienteLanche1.toLowerCase()}`);
}else{
	console.log("Escolha outro filme :(");
}; 

//-----questao 2-----
//criar um sistema de vendas de ingressos de jogos de um estádio de futebol
//variaveis a serem preenchidas
const clienteCadastro = {nome_completo:"",tipo_de_jogo:"", etapa_do_jogo:"", categoria:0, quantidade_de_ingressos:0};
const ingressoDomestico = {etapa_jogo: [[1320,880,550,220],[660,440,330,170],[1980,1320,880,330]]}; //SF 1 = 1320 || [0][0];
const ingressoInternacional = {...ingressoDomestico};
//i1 - usuario respondendo acerca da variavel
const pergunta1 = prompt("Digite seu nome completo").toUpperCase();
const pergunta2 = prompt("Digite IN para internacional ou DO para domestico").toUpperCase();
const pergunta3 = prompt("Digite SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase();
const pergunta4 = Number(prompt("Digite um numero sendo um 1 ou 2 ou 3 ou 4"));
const pergunta5 = Number(prompt("Digite um numero de quantidade de ingressos que voce ira comprar"));
//i2 - inputs salvos nas variaveis
clienteCadastro.nome_completo = pergunta1;
if(pergunta2 === "DO"){
	clienteCadastro.tipo_de_jogo = "Nacional";
}else if(pergunta2 === "IN"){
	clienteCadastro.tipo_de_jogo = "Internacional";
}else{
	clienteCadastro.tipo_de_jogo = "nao escolhido";
};
if(pergunta3 === "SF"){
	clienteCadastro.etapa_do_jogo = "semi-final";
}else if(pergunta3 === "DT"){
	clienteCadastro.etapa_do_jogo = "decisao de terceiro lugar";
}else if(pergunta3 === "FI"){
	clienteCadastro.etapa_do_jogo = "final";
}else{
	clienteCadastro.etapa_do_jogo = "nao escolhido";
};
if(pergunta4 > 0 || pergunta4 <= 4){clienteCadastro.categoria = pergunta4;}else{clienteCadastro.categoria = "nao escolhido";};
clienteCadastro.quantidade_de_ingressos = pergunta5;
//deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade)
/*
console.log(`---Dados da compra--- 
Nome do cliente:  ${} 
Tipo do jogo:  ${} 
Etapa do jogo:  ${} 
Categoria:  ${} 
Quantidade de Ingressos:  ${} ingressos 
---Valores--- 
Valor do ingresso:  R$ ${}
Valor total:  R$ ${}
`);
ou
---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  U$ 482.92682926829275
Valor total:  U$ 4829.2682926829275
*/
console.log(clienteCadastro.nome_completo);
console.log(clienteCadastro.tipo_de_jogo);
console.log(clienteCadastro.etapa_do_jogo);
console.log(clienteCadastro.categoria);
console.log(clienteCadastro.quantidade_de_ingressos);

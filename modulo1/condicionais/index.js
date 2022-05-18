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
/*
//-----questao 1-----
//a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
const idade = Number(prompt("Digite a sua idade em numero."));
//b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
console.log(idade,typeof(idade),typeof(idade)==="number");
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
if(idade >= 18){console.log("Você pode dirigir");}else{console.log("Você não pode dirigir");};
*/
/*
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
*/
/*
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
*/
/*
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
*/
//=====DESAFIOS=====
/*
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
*/
//-----questao 2-----
//criar um sistema de vendas de ingressos de jogos de um estádio de futebol
// constantes e loops
const notaFiscal = {
	moeda: ["R$","$"], // real, dollar
	valor_do_ingresso_do: [[1320,880,550,220], //do sf
						[660,440,330,170], //do	dt 
						[1980,1320,880,330]], //do fi
	valor_do_ingresso_in: [[320,80,50,20], //in sf [0][0]
						[60,40,30,70], //in	dt [1][0]
						[198,132,88,33]], //in fi [2][0]					
};
const clienteCadastro = {
	nomeCompleto(){
		const user = prompt("Digite seu nome completo").toUpperCase();
		return user;
	},
	tipoDeJogo(){
		const publico = prompt("Digite IN para internacional ou DO para domestico").toUpperCase();
		const tipo = [];
		if(publico === "DO"){
			tipo.push(notaFiscal.moeda[0],notaFiscal.valor_do_ingresso_do, "Nacional");
			return tipo;
		}else if(publico === "IN"){
			tipo.push(notaFiscal.moeda[1],notaFiscal.valor_do_ingresso_in, "Internacional");
			return tipo;
		}else{
			return "nao escolhido";
		};	
	}, 
	etapaDoJogo(){
		const indice = prompt("Digite SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase();
		const etapa = [];
		if(indice === "SF"){
			etapa.push(0,"semi-final");
			return etapa;
		}else if(indice === "DT"){
			etapa.push(1,"decisao de terceiro lugar");
			return etapa;
		}else if(indice === "FI"){
			etapa.push(2,"final");
			return etapa;
		}else{
			return "nao escolhido";
		};
	}, 
	categoria(){
		const numero = Number(prompt("Digite um numero sendo um 1 ou 2 ou 3 ou 4"));
		const subIndice = [];
		if(numero > 0 && numero <= 4){
			subIndice.push(numero,numero - 1); 
			return subIndice;
		}else{
			return "valor de categoria nao reconhecido";
		};
	}, 
	quantidadeDeIngressos(){	
		const quantidade = Number(prompt("Digite um numero de quantidade de ingressos que voce ira comprar"))
		return quantidade;
	}
};
// main || executar programa
const qa1 = clienteCadastro.nomeCompleto();
const qa2 = clienteCadastro.tipoDeJogo(); //publico = tipo[notaFiscal.moeda[0],notaFiscal.valor_do_ingresso_do[], "Nacional"] => console.log(qa2[1]);
const qa3 = clienteCadastro.etapaDoJogo(); //indice = etapa[0,"semi-final"] => console.log(qa3[0]); 
const qa4 = clienteCadastro.categoria(); //numero = subindice[0]
const qa5 = clienteCadastro.quantidadeDeIngressos();
const indice = qa3[0];
const arrays = qa2[1][indice];
const numero2 = qa4[1];
console.log(`
			---Dados da compra--- 
		Nome do cliente:  ${qa1} 
		Tipo do jogo:  ${qa2[2]} 
		Etapa do jogo:  ${qa3[1]} 
		Categoria:  ${qa4[0]} 
		Quantidade de Ingressos:  ${qa5} ingressos 
			---Valores--- 
		Valor do ingresso:  ${qa2[0]} ${arrays[numero2]}
		Valor total:  ${qa2[0]} ${arrays[numero2] * qa5}
`);

const iniciarJogo = (function(){
"use strict";
console.log("Boas vindas ao jogo de Blackjack!");
const menu = confirm("Quer iniciar uma nova rodada?");
const novaPartida = () => {
//const carta = comprarCarta();
	let usuario = {cartas:[comprarCarta(),comprarCarta()]};
	let pc = {cartas1:[comprarCarta(),comprarCarta()]};
//verificar se as duas cartas sao do mesmo naipe	
	if((usuario.cartas[0].texto.includes("A") === usuario.cartas[1].texto.includes("A"))||(pc.cartas[0].texto.includes("A")===pc.cartas[1].texto.includes("A"))){
		usuario.cartas[0].texto = comprarCarta().texto;
		pc.cartas1[0].texto = comprarCarta().texto;
		console.log(`"Usuário - cartas: ${usuario.cartas[0].texto} ${usuario.cartas[1].texto} - pontuação ${usuario.cartas[0].valor + usuario.cartas[1].valor}" 
"Computador - cartas: ${pc.cartas1[0].texto} ${pc.cartas1[1].texto} - pontuação ${pc.cartas1[0].valor + pc.cartas1[1].valor}"`);
	}else{
		console.log(`"Usuário - cartas: ${usuario.cartas[0].texto} ${usuario.cartas[1].texto} - pontuação ${usuario.cartas[0].valor + usuario.cartas[1].valor}" 
"Computador - cartas: ${pc.cartas1[0].texto} ${pc.cartas1[1].texto} - pontuação ${pc.cartas1[0].valor + pc.cartas1[1].valor}"`);
	};
//imprimir e verificar valores
 	const imprimir=()=>{
 		if((usuario.cartas[0].valor + usuario.cartas[1].valor) === (pc.cartas1[0].valor + pc.cartas1[1].valor) && ((usuario.cartas[0].valor + usuario.cartas[1].valor) === (pc.cartas1[0].valor + pc.cartas1[1].valor)) <= 21){
 			console.log("empate");
 		}else if((usuario.cartas[0].valor + usuario.cartas[1].valor) > (pc.cartas1[0].valor + pc.cartas1[1].valor) && ((usuario.cartas[0].valor + usuario.cartas[1].valor) > (pc.cartas1[0].valor + pc.cartas1[1].valor)) <= 21){
 			console.log("jogador venceu");
 		}else if((usuario.cartas[0].valor + usuario.cartas[1].valor) < (pc.cartas1[0].valor + pc.cartas1[1].valor) && ((usuario.cartas[0].valor + usuario.cartas[1].valor) < (pc.cartas1[0].valor + pc.cartas1[1].valor)) <= 21){
 			console.log("pc venceu");
 		}else{
 			console.log("jogar novamente?");
 		};	
 	};
 	return imprimir();
 };		
 //condicao para continuar o app ou fechar app
 if(menu){novaPartida();}else{console.log("Fim de jogo");};
 })();

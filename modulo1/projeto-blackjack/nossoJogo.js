/*
const iniciarJogo = (function(){
"use strict";
console.log("Boas vindas ao jogo de Blackjack!");
const menu = confirm("Quer iniciar uma nova rodada?");
const novaPartida = () => {
//const carta = comprarCarta();
	const usuario = {cartas:[comprarCarta(),comprarCarta()]};
	const pc = {cartas1:[comprarCarta(),comprarCarta()]};
//imprimir valores aleatorios
	console.log(`"Usuário - cartas: ${usuario.cartas[0].texto} ${usuario.cartas[1].texto} - pontuação ${usuario.cartas[0].valor + usuario.cartas[1].valor}" 
"Computador - cartas: ${pc.cartas1[0].texto} ${pc.cartas1[1].texto} - pontuação ${pc.cartas1[0].valor + pc.cartas1[1].valor}"`);
//verificar valores
 	const imprimir=()=>{
 		if((usuario.cartas[0].valor + usuario.cartas[1].valor) === (pc.cartas1[0].valor + pc.cartas1[1].valor)){
 			console.log("empate");
 		}else if((usuario.cartas[0].valor + usuario.cartas[1].valor) > (pc.cartas1[0].valor + pc.cartas1[1].valor)){
 			console.log("jogador venceu");
 		}else if((usuario.cartas[0].valor + usuario.cartas[1].valor) < (pc.cartas1[0].valor + pc.cartas1[1].valor)){
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
 */

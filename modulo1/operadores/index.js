//Exercícios de interpretação de código
//-----------------questao 1-------------
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)   //FALSE

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)   //FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)   // TRUE

console.log("d. ", typeof resultado) //BOOL
*/
//----------questao 2---------------------
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // DUAS STRINGS CONCATENADAS
*/
//----------questao 3---------------------
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero) //CONVERTER STRING PARA NUMERO

console.log(soma) // DUAS NUMBERS SOMADOS
*/
// Exercícios de escrita de código
//----------questao 1---------------------
let idadeUsuario, idadeAmi, mensagemResposta, mensagem1, mensagem2;
mensagem1 = prompt("Digite sua idade: ");
idadeUsuario = Number(mensagem1); 
mensagem2 = prompt("Digite a idade de uma amizade: ");
idadeAmi = Number(mensagem2);
mensagemResposta = "Sua idade é maior do que a do seu melhor amigo?";
console.log(mensagemResposta, mensagem1 > mensagem2);
//----------questao 2-----------------
//insira um número par
let numero1;
mensagem1 = prompt("Vamos Dividir para dois?\nDigite um numero: ");
numero1 = Number(mensagem1);
//imprima na console o resto da divisão desse número por 2
console.log(numero1 % 2); // se o resto for 0 entao o numero e par
						  // se o resto for 1 entao o numero e impar
//----------questao 3 --------------------
let meses, dias, horas, anoUsuario, anoAtual, anoMes, anoDias, anoHoras;
anoAtual = 2022;
anoMes = 12;
anoDias = anoMes * 30;
anoHoras = 24 * anoDias;
//qual o ano de seu nascimento?
mensagem1 = prompt("Qual o ano de seu nascimento?");
anoUsuario = Number(mensagem1);
idadeAno = anoAtual - anoUsuario;
// vc tem x meses de vida!
let tempoMeses = idadeAno * anoMes;
console.log(`Voce tem ${tempoMeses} meses de vida!`);
// vc tem y dias de vida!
let tempoDias = idadeAno * anoDias;
console.log(`Voce tem ${tempoDias} dias de vida!`);
// vc tem z horas de vida!
let tempoHoras = idadeAno * anoHoras;
console.log(`Voce tem ${tempoHoras} horas de vida!`);

//-----------questao 4-------------------
//pergunte ao usuário dois números
let numero2;
mensagem1 = prompt("Vamos testar a logica entre numeros\nDigite um numero");
numero1 = Number(mensagem1);

mensagem2 = prompt("Digite um segundo numero");
numero2 = Number(mensagem2);
//O primeiro numero é maior que segundo?
console.log(`O primeiro numero é maior que segundo? ${numero1 > numero2}`);
//O primeiro numero é igual ao segundo?
console.log(`O primeiro numero é igual ao segundo? ${numero1 === numero2}`);
//O primeiro numero é divisível pelo segundo?
console.log(`O primeiro numero é divisível pelo segundo? ${numero1 / numero2 && true}`);
//O segundo numero é divisível pelo primeiro? 
console.log(`O segundo numero é divisível pelo primeiro? ${numero2 / numero1 && true}`);
//*********DESAFIO*****************
//-------------questao 1------------------------
let grausCelsius, kelvin, grausFahrenheit;
const constanteKelvin = 273.15;
const constanteFahrenheit = 32;
//Graus Fahrenheit(°F) para Kelvin(K)
//kelvin = (grausFahrenheit - constanteFahrenheit) * (5/9) + constanteKelvin;
//Graus Celsius(°C) para Graus Fahrenheit (°C)
//grausFahrenheit = grausCelsius * (9/5) + constanteFahrenheit;
alert("conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K)");
// letra A)
grausFahrenheit = 77;
kelvin = (grausFahrenheit - constanteFahrenheit) * (5/9) + constanteKelvin;
alert(`77°F em  K: ${kelvin}`);
console.log(`77°F em  K: ${kelvin}`);
// letra B)
grausCelsius = 80;
grausFahrenheit = grausCelsius * (9/5) + constanteFahrenheit;
alert(`80°C em  K: ${grausFahrenheit}`);
console.log(`80°C em  K: ${grausFahrenheit}`);
// letra C)
grausCelsius = 30;
grausFahrenheit = grausCelsius * (9/5) + constanteFahrenheit;
kelvin = (grausFahrenheit - constanteFahrenheit) * (5/9) + constanteKelvin;
alert(`30°C em: ${grausFahrenheit}°F  e ${kelvin} K`);
console.log(`30°C em: ${grausFahrenheit} °F e ${kelvin} K`);
//letra D)
mensagem1 = prompt("Conversao de escalas de temperatura\c Celsius para Fahrenheit e kelvin");
grausCelsius = Number(mensagem1);
grausFahrenheit = grausCelsius * (9/5) + constanteFahrenheit;
kelvin = (grausFahrenheit - constanteFahrenheit) * (5/9) + constanteKelvin;
alert(`30°C em: ${grausFahrenheit}°F  e ${kelvin} K`);
console.log(`30°C em: ${grausFahrenheit} °F e ${kelvin} K`);
//--------questao 2-------------------
//quantidade de quilowatts consumida por uma residência
const kwH = 0.05;
//letra A) 
//Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
alert(`Residencia com consumo de 280 quilowatt-hora, tera que pagar: R$ ${280 * kwH}`);    
//letra B) 
//Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
alert(`Residencia com consumo de 280 quilowatt-hora, tera que pagar com desconto de 15% R$ ${(280 * kwH) - ((280 * kwH)*(15/100))}`); 
//----------questao 3-----------------
//letra A)
console.log(`20 lb equivale a ${20 * 0.205746038} kg`);
//letra B)
console.log(`10.5 onz equivale a ${10.5 * 0.000803695461} kg`);
//letra C)
console.log(`100mi equivalem a ${100 * 1609} m`);
//letra D)
console.log(`50ft equivalem a ${50 * 3.281} m`);
//letra E)
console.log(`103.56gal equivalem a ${103.56 * 3.7854411932} L`);
//letra F)
console.log(`450 xic equivalem a ${450 * 4.1666667} L`);
//letra G)
valorOriginal = Number(prompt("Digite o valor de 1609 metros em milha:"));
alert(`${valorOriginal} milha`);

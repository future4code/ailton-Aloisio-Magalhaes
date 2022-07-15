// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const base = prompt("Digite um numero para a base do retangulo");
  const altura = prompt("Digite um numero para a altura do retangulo");
  console.log(base * altura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite um numero para a base do retangulo");
  const anoNascimento = prompt("Digite um numero para a altura do retangulo");
  console.log(anoAtual - anoNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura**2)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome");
  const idade = prompt("Digite sua idade");
  const email = prompt("Digite seu email");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritas = [];
  coresFavoritas.push() = prompt("cor1");
  coresFavoritas.push() = prompt("cor2");
  coresFavoritas.push() = prompt("cor3");
  console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return (custo / valorIngresso);
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop();
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    let array1 = [];
    let indiceNumerico = Number(array.length - 1);
    array1.push(array[indiceNumerico]); 
    array1.push(array[0]);
    array[0] = array1[0];
    array[array.length -1] = array1[1]; 
    return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let resultado1 = string1.length === string2.length;
  let valor1 = string1.toLowerCase();
  let valor2 = string2.toLowerCase();
  let resultado2 = (valor1.localeCompare(valor2) == 0);
  return resultado1 && resultado2;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("EM QUE ANO ESTAMOS?"));
const anoNascimento = Number(prompt("em que ano vc nasceu"));
const anoEmissaoDaCarta = Number(prompt("ano de ano de emissao da carta de motorista"));

let idade = (anoAtual - anoNascimento);
let renovacaoCarta = (anoEmissaoDaCarta - anoNascimento);

const idadeTrue = (idade === 20) || (idade === 50);  
const idadeFalse = !(idade <= 20) || !(idade  > 20 && idade <= 50) || !(idade > 50);
const renovacaoTrue = (renovacaoCarta === 5) || (renovacaoCarta === 10) || (renovacaoCarta === 15);
const renovacaoFalse = !(renovacaoCarta === 5) || !(renovacaoCarta === 10) || !(renovacaoCarta === 15);
console.log(!(idadeTrue && renovacaoTrue) || !(idadeFalse && renovacaoFalse) || (idadeTrue && renovacaoTrue)  || (idadeFalse && renovacaoFalse)
  );
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
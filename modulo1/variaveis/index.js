/*
let a = 10;
let b = 10;

console.log(b); // 10

b = 5;
console.log(a, b); // 10 , 5

let a = 10;
let b = 20;
c = a;
b = c;
a = b;

console.log(a, b, c); // 10, 10, 10

//let jornadaDeTrabalho = prompt("Quantas horas você trabalha por dia?");
//let ganhosPorJornada = prompt("Quanto você recebe por dia?");
//alert(`Voce recebe ${ganhosPorJornada/jornadaDeTrabalho} por hora`);
*/
let nome = "";
let idade = 0;
console.log(typeof(nome), typeof(idade));
const perguntaNome = prompt("qual o seu nome?");
const perguntaIdade = prompt("qual a sua idade?");
alert(`Olá ${perguntaNome},  você tem ${perguntaIdade} anos`);

alert("a seguir responda o quiz com 'sim' ou 'nao'");
const perguntaCor = prompt("Você está usando uma roupa azul hoje?");
alert(`Você está usando uma roupa azul hoje? - ${perguntaCor}`);

const perguntaLaptop = prompt("Você está usando um laptop?");
alert(`Você está usando um laptop? - ${perguntaLaptop}`);

const perguntaFilme = prompt("Você assistiu hoje algum filme?");
alert(`Você assistiu hoje algum filme? - ${perguntaFilme}`);

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
a = a + b;
b = a - b;
a = a - b;
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

alert("operacoes aritmeticas de soma e multiplicacao a seguir, digite os numeros entre '0' a '9'!");
const perguntaNumero1 = prompt("Digite o primeiro numero:");
const perguntaNumero2 = prompt("Digite o segundo numero:");
alert(`O primeiro número somado ao segundo número resulta em: ${Number(perguntaNumero1) + Number(perguntaNumero2)}`);
alert(`O primeiro número multiplicado pelo segundo número resulta em: ${Number(perguntaNumero1) * Number(perguntaNumero2)}`);
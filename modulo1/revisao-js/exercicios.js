// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a, b){return a-b});
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(array % 2===0);  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
//array.filter(array % 2===0).map((indice)=>{return indice**2});
//return array;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  array.sort(function(a, b){return a-b});
  let maior = array[array.length-1];
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
var maior = Math.max(num1, num2);
var menor = Math.min(num1, num2);
const obj = {
	maiorNumero: (maior),
	maiorDivisivelPorMenor: ((maior % menor) == 0),
	diferenca:(maior - menor)
};
return obj;

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
	if (ladoA == ladoB && ladoB == ladoC) {
      return "Equilátero";
	}else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {
      return "Isósceles";
	}else {
      return "Escaleno";
	};
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort(function(a, b){return a-b});
  let maior = array[array.length - 2];
  let menor = array[1];
  let arr = [maior, menor];
  return arr;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
// saída
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) { 
   pessoa.nome = "ANÔNIMO"; 
   return pessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
let conta1, conta2, conta3, conta4, conta5, conta6;
conta1 = contas[0];
conta2 = contas[1];
conta3 = contas[2];
conta4 = contas[3];
conta5 = contas[4];
conta6 = contas[5];

conta1.saldoTotal = conta1.saldoTotal - 600;
conta2.saldoTotal = conta2.saldoTotal - 1240;
conta3.saldoTotal = conta3.saldoTotal - 13340;
conta4.saldoTotal = conta4.saldoTotal - 2000;
conta5.saldoTotal = conta5.saldoTotal - 500;
conta6.saldoTotal = conta6.saldoTotal - 0;

conta1.compras = [];
conta2.compras = [];
conta3.compras = [];
conta4.compras = [];
conta5.compras = [];
conta6.compras = [];

let conta = [];
conta.push(conta1);
conta.push(conta2);
conta.push(conta3);
conta.push(conta4);
conta.push(conta5);
conta.push(conta6);
return conta;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}

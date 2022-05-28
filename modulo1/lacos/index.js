/*(
    function(){
    "use strict";
     //code       
    }
)();
*/
//=====Exercícios de interpretação de código=====

//-----questao 1-----
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/
//o codigo e um loop FOR que percorre os indices do array 
//adicionando o numero do indice como seu proprio valor
//no fim ira imprimir 5 console.log com valor em sequencia de 0,1,2,3,4

//-----questao 2-----
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*/
//A) sera impresso 19, 21, 23, 25, 27, 30
//FOR...OF nao e um laco de repeticao generalista, entao ele nao seria bom pra realizar tarefas desse tipo.

//-----questao 3-----
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/
// se o usuario digitar '4' sera impresso na linha *
// na proxima linha                                **
// na proxima linha                                ***

//=====Exercícios de escrita de código======

//-----questao 1-----
//Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

const quantidadePetsUsuario = Number(prompt("quantos pets possui?"));
const listaDePets = () => {
    const lista = [];
    contadorInicial = 0;
    for(let indice = 0; indice < quantidadePetsUsuario;indice++){
        const pets = prompt("digite os nomes deles, um por um:");
        
        lista.push(pets);
        
    };
    console.log(lista);
};
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
if(quantidadePetsUsuario === 0){
    alert("Que pena! Você pode adotar um pet!");
}else{
    listaDePets();
};

//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//c) Por fim, imprima o array com os nomes dos bichinhos no console

//-----questao 2-----

const arrayOriginal = [80,30,130,40,60,21,70,120,90,103,110,55];
const condicaoLoop = arrayOriginal.length - 1;
let indice = 0;
//a) Escreva um programa que imprime cada um dos valores do array original.
const exercicioDoisLetraA = (indice,condicaoLoop) => {
    for(indice;indice <= condicaoLoop; indice++){
        console.log("indice:",indice, "valor:", arrayOriginal[indice]);
    }
};
exercicioDoisLetraA(indice,condicaoLoop);
//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
const exercicioDoisLetraB = (indice,condicaoLoop) => {
    for(indice;indice <= condicaoLoop; indice++){
        console.log((arrayOriginal[indice])/10);
    }
};
exercicioDoisLetraB(indice,condicaoLoop);
//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
const exercicioDoisLetraC = (indice,condicaoLoop) => {
    for(indice;indice <= condicaoLoop; indice++){
        if((arrayOriginal[indice])%2 === 0){
            const novoArray = [];
            novoArray.push(arrayOriginal[indice]);
            console.log(novoArray);
        }
    }
};
exercicioDoisLetraC(indice,condicaoLoop);
//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
const exercicioDoisLetraD = (indice,condicaoLoop) =>{
    const novoArray = ["O elemento do índex","é:"];
    for(indice;indice <= condicaoLoop; indice++){
        if((arrayOriginal[indice])){
            console.log(novoArray[0],indice,novoArray[1],arrayOriginal[indice]);
        }
    }
}; 
exercicioDoisLetraD(indice,condicaoLoop);
//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
const exercicioDoisLetraE = (indice,condicaoLoop) => {
    let max = arrayOriginal[indice];
    let min = arrayOriginal[indice];
    for(indice;indice <= condicaoLoop; indice++){
        if(min > arrayOriginal[indice]){
            min = arrayOriginal[indice];
        }else if(max < arrayOriginal[indice]){
            max = arrayOriginal[indice];
        }else{console.log("");}
    }
    console.log(`O maior número é ${max} e o menor é ${min}`);
};
exercicioDoisLetraE(indice,condicaoLoop);


//======DESAFIOS======
//-----questao 1 ----
/*
const repeticao = () => {
let contador = 0;
const condicao = Math.floor((Math.random() * (max - min + 1)) + min);    
    for(contador;contador < max; contador++){
        let numero = prompt("Vamos jogar!");
        if(condicao > numero){
            let maiorMenor = `O número chutado foi:${numero} 
            Errrrrrrrou, é maior`;
            return maiorMenor;
        }else if(condicao < numero){
            let maiorMenor = `O número chutado foi:${numero} 
            Errrrrrrrou, é menor`;
            return maiorMenor
        }else{
            let igual =`Acertou
            O número de tentativas foi :${contador}`;
            return igual;
        }
    }
    
};
function guessNumber (){
    console.log(guessNumber(0,100));
};
*/
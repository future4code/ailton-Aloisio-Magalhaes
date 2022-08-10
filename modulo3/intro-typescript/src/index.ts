import prompt from 'prompt';

//exercicio 1

function checaTriangulo(a:number,b:number,c:number):void{

	if(a !== b && b !== c){
		console.log("Exercicio 1: escaleno");
	}else if(a === b && b === c){
		console.log("Exercicio 1: Equilatero");
	}else{
		console.log("Exercicio 1: isosceles");
	}
}
checaTriangulo(1,2,3);
//exercicio 2


async function imprimeTresCoresFavoritas():Promise<any>{
  await prompt.start();
  prompt.get(['cor1', 'cor2', 'cor3'], function (err:any, result:any) {
 console.log("exercicio 2:",result);
});
}
imprimeTresCoresFavoritas()


//exercicio 3
function checaAnoBissexto(ano:number):any {
   const cond1:boolean = ano % 400 === 0
   const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
   return console.log("exercicio 3: ", cond1 || cond2);
}

checaAnoBissexto(1997);

//exercicio 4
function comparaDoisNumeros(num1:number, num2:number) {
  let maiorNumero;
  let menorNumero;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca = maiorNumero - menorNumero;

  console.log("exercicio 4: ", diferenca); 
}
comparaDoisNumeros(1,2);

// exercicio 5
function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ):void {
 let idade:number = anoAtual - anoNascimento
 let tempoCarteira:number = anoAtual - anoEmissao

  if(idade <= 20 ) {
      console.log( tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos")
    
   }else if(idade >= 20 || idade <= 50) {
     console.log( tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos")
    
   }else if(idade > 50) {
     console.log( tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos")
    
    }else {
        console.log( "error")
    }
}
checaRenovacaoRG(2022,1997,2021)

// exercicio 6
function operaM(a:number,b:number):void{
	console.log(`exercicio 6:
${a+b}
${a-b}
${a*b}
${a/b}
${a > b ? 'primeiro > segundo':'b' || a < b ? 'segundo > primeiro': 'a'}
`);
}
operaM(1,2)

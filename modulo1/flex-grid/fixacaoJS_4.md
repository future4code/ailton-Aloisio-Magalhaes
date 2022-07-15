```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
const quantidade = arrayDeNumeros.filter(item => item === numeroEscolhido).length;
 if(quantidade === 0){
	return `Número não encontrado`;
}else{
	return `O número ${numeroEscolhido} aparece ${quantidade}x`;
};
}
```

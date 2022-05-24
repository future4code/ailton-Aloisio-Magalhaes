//localizacao do codigo que sera criado
function loop () {console.log("oi");};
//callback function
function game (callbackFn){callbackFn();};
// higher-order function
function main () {return game(loop);};
//invocando funcao que retorna as funcoes
main();

var minhaString:string = "aloisio";
var meuNumero:number = 25;

type Person = {
	nome:string;
	idade:number;
	corFavorita:string
};
enum Cores {
  Azul = "Azul",
  Vermelho = "red",
  Verde = "verde",
  Branco = "white",
  Preto = "preto"
};
interface Person1 {
  nome: string;
  idade: number;
  corFavorita: string;
};
function greet(person: Person) {
  return `Hello ${person.nome} ${person.idade} ${person.corFavorita}`;
};

var Eu:Person = {
	nome:"aloisio",
	idade:25,
	corFavorita: Cores.Azul
};

console.log(greet(Eu));

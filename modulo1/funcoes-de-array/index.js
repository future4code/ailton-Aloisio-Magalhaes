//=====INTERPRETACAO=====

//-----questao 1-----
/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})
*/
//a) O que vai ser impresso no console?
//array de cada objeto, indice deles, array todos eles

//-----questao 2-----
/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)
*/
//a) O que vai ser impresso no console?
// "Amanda Rangel"
// "Laís Petra"
// "Letícia Chijo"

//-----questao 3-----
/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)
*/
//a) O que vai ser impresso no console?
// Mandi, Laura

//======CODIGO=====

//-----questao 1-----
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
//a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomesPets = pets.map((pets)=>{return pets.nome;});
console.log(nomesPets);
//b) Crie um novo array apenas com os cachorros salsicha
const racaSalsicha = pets.filter((pets)=>{return pets.raca === "Salsicha";}).map((pets)=>{console.log(pets)});
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
const mensagemPoodles = pets.filter((pets)=>{return pets.raca === "Poodle"}).map((pets)=>{return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`;});
console.log(mensagemPoodles);

//-----questao 2-----
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a) Crie um novo array que contenha apenas o nome de cada item
const nomeProdutos = produtos.filter((produto)=>{return produto.nome}).map((produto)=>{console.log(produto.nome)});
//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const descontoProdutos = produtos.filter((produtos)=>{return produtos.preco *= 0.95}).map((produtos)=>{console.log(produtos)});
//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidasProdutos = produtos.filter((produto)=>{return produto.categoria === "Bebidas";}).map((produto)=>{console.log(produto)});
//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const ypeProdutos = produtos.filter((produto)=>{return produto.nome.includes("Ypê")}).map((produto)=>{console.log(produto)});
//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const fraseProdutos = produtos.map((produto)=>{console.log(`Compre ${produto.nome} por ${produto.preco}`)});

//=====DESAFIOS=====

//-----questao 1-----
const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]
//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
const pokemonsLista = pokemons.map((pokemon)=>{return pokemon.nome}).sort();
console.log(pokemonsLista);
//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const pokemonsTipos = pokemons.filter((pokemon)=>{return pokemon.tipo;}).map((pokemon)=>{console.log(pokemon.tipo)});

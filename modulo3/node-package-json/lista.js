var lista = [];
if (lista.push(process.argv[2])) {
  console.log('Tarefa adicionada com sucesso!');
  console.log(lista);
} else {
  console.log('error');
}

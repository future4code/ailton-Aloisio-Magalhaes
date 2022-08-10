const valor1 = Number(process.argv[3]);
const valor2 = Number(process.argv[4]);

switch (process.argv[2]) {
  case 'soma':
    return console.log(valor1 + valor2);
    break;
  case 'subt':
    return console.log(valor1 - valor2);
    break;
}

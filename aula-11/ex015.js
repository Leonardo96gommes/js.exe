var idade = 66;
console.log(`você tem ${idade} anos.`)
if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18 || idade > 65) {
  // Se a idade for maior ou igual a 16 e menor que 18
  console.log("Voto opcional");
} else {
  // Se a idade for 18 ou mais
  console.log("Voto obrigatório")
}

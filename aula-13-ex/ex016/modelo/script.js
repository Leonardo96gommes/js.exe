function calc() {
  let num1 = parseFloat(document.getElementById("txtnumero1").value);
  let num2 = parseFloat(document.getElementById("txtnumero2").value);
  let operador = document.getElementById("operador").value;
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, insira números válidos");
    return;
  }

  switch (operador) {
    case "soma":
      resultado = num1 + num2;
      break;
    case "subtracao":
      resultado = num1 - num2;
      break;
    case "multiplicacao":
      resultado = num1 * num2;
      break;
    case "divisao":
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        alert("Não é possível dividir por zero");
        return;
      }
      break;
    default:
      alert("Operador inválido");
      return;
  }

  document.getElementById("res").innerHTML = `Resultado: <strong>${resultado}<strong/>`;
}
function contar() {
  // obter elementos por id
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let res = document.getElementById("res");

  // verificar se os valores estão vazios
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("[ERRO] Faltam dados!");
  } else {
    // iniciar a contagem
    res.innerHTML = "Contando: <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      alert("Passo inválido! Considerando Passo 1");
      p = 1;
    }

    // contar em ordem crescente
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1f449}`;
      }
    } else {
      // contar em ordem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1f449}`;
      }
    }
    res.innerHTML += " Fim!";
  }
}

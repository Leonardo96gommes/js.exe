// Função calcular é chamada ao pressionar um botão no HTML
function calcular() {
  // Obtém a referência ao elemento HTML com o id "numero"
  let num = document.getElementById("numero");

  // Obtém a referência ao elemento HTML com o id "tabuada"
  let tab = document.getElementById("tabuada");

  // Verifica se o campo de entrada está vazio
  if (num.value.length == 0) {
    // Se estiver vazio, exibe um alerta de erro
    alert("[ERRO] Faltam dados!");
  } else {
    // Se o campo não estiver vazio, continua o processamento

    // Converte o valor do campo de entrada para um número
    let n = Number(num.value);

    // Inicializa uma variável de controle c com o valor 1
    let c = 1;

    // Limpa o conteúdo do elemento com id "tabuada"
    tab.innerHTML = "";

    // Inicia um loop enquanto c for menor ou igual a 10
    while (c <= 10) {
      // Cria um elemento de opção (option) para adicionar à lista (select) no HTML
      let item = document.createElement("option");

      // Define o texto do elemento de opção com a tabuada calculada
      item.text = `${n} x ${c} = ${n * c}`;

      // Define o valor do elemento de opção (opcional, pode ser útil em alguns contextos)
      item.value = `tab${c}`;

      // Adiciona o elemento de opção à lista (select) com id "tabuada"
      tab.appendChild(item);

      // Incrementa a variável de controle c para a próxima iteração
      c++;
    }
  }
}

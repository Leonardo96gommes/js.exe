function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora sao ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = "manhã.jpg";
    document.body.style.background = "#E5C092";
  } else if (hora >= 12 && hora < 18) {
    img.src = "tarde.jpg";
    document.body.style.background = "#524813";
    // BOA TARDE!
  } else {
    img.src = "noite.jpg";
    document.body.style.background = "#141018";
    //BOA NOITE!
  }
}

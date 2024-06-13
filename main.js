console.log("Você toca algum instrumento musical?");

const respostas = ["sim", "s", "n", "nao", "não"];
let usuario = "";

process.stdin.on("data", function (data) {
    usuario = data.toString().trim().toLowerCase();
  if (usuario == respostas[0] || usuario == respostas[1]) {
    console.log("Sua resposta é sim");
  } else if (usuario == respostas[2] || usuario == respostas[3] || usuario == respostas[4]) {
    console.log("Sua resposta é não");
  } else {
    console.log("Não entendi");
  } 
  process.exit();
});

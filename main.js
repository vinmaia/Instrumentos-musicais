console.log("Você toca algum instrumento musical?");

const respostas = ["sim", "s", "n", "nao", "não"];
let usuario;
let instrumentoTemp;
let escolha;
process.stdin.on("data", function (data) {
  if (!usuario) {
    usuario = data.toString().trim().toLowerCase();

    if (usuario == respostas[0] || usuario == respostas[1]) {
      console.log("Qual?");
    } else if (
      usuario == respostas[2] ||
      usuario == respostas[3] ||
      usuario == respostas[4]
    ) {
      console.log("Que pena");
      process.exit();
    } else {
      console.log("Não entendi");
    }
  } else {
    if (!instrumentoTemp) {
      instrumentoTemp = data.toString().trim().toLowerCase();
    } else {
      instrumento = instrumentoTemp
      escolhaInstrumental(instrumento);
      process.exit();
    }
  }
});

function escolhaInstrumental(instrumento) {
  switch (instrumento) {
    case "violão":
      console.log(
        "Sabia que o violão é um instrumento mundialmente conhecido e o mais popular do grupo de cordas dedilhadas"
      );
      break;
    case "piano":
      console.log(
        "Sabia que o ancestral do piano foi um instrumento monocromático"
      );
      break;
    case "guitarra":
      console.log(
        "Existem mais de 130 grandes empresas de guitarra no mundo, variedade par todos os gostos"
      );
      break;
    case "bateria":
      console.log(
        "A bateria é para marcar ritmo, você deve ter uma coordenação incrível"
      );
      break;
    default:
      console.log("Interessante");
      break;
  }
}

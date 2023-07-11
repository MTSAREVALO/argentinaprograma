let opcionesPc = ["piedra", "papel", "tijeras"];
function obtenerJugadaUsuario() { 
  const readlineSync = require('readline-sync');
  let opciones = readlineSync.question("Ingrese una opcion:Piedra,Papel o Tijeras \n").toLowerCase();
  while (opciones !== "piedra" && opciones !== "papel" && opciones !== "tijeras") {
    opciones = readlineSync.question("Opcion invalida. Elige una opcion: Piedra, Papel o Tijeras \n").toLowerCase();
  }
  return opciones}

  function obtenerJugadaComputadora(){
  let opcionesPc = ["piedra", "papel", "tijeras"];
  let indice = Math.floor(Math.random() * 3);
  return opcionesPc[indice];
  }

  function determinarGanador(jugadaUsuario, jugadaComputadora){
    let opcionesPc = ["piedra", "papel", "tijeras"]
    let piedra= opcionesPc[0]
    let papel= opcionesPc[1]
    let tijeras= opcionesPc[2]
    if (jugadaUsuario == jugadaComputadora) {
      return "Empate";
    } else if (
      (jugadaUsuario == piedra && jugadaComputadora == tijeras) ||
      (jugadaUsuario == papel && jugadaComputadora == piedra) ||
      (jugadaUsuario == tijeras && jugadaComputadora == papel)
    ) {
      return "Gana el usuario";
    } else {
      return "Gana la computadora";
    }
  }
  function iniciarJuego(){
    let usuario = obtenerJugadaUsuario();
    let computadora= obtenerJugadaComputadora();
    let ganador = determinarGanador();

     console.log("La computadora eligio: "+ computadora)
     console.log("El usuario eligio: "+ usuario )
     console.log("El resultado fue: " + ganador )

  }
  iniciarJuego();
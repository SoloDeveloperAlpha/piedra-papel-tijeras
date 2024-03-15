const sel = document.querySelector(".sel");

const result = document.getElementById("resultado");
const sel2 = document.querySelector(".sel2");
sel2.style.display = "none";

const imagen = document.getElementById("versus");
imagen.style.display = "none";

const btn = document.getElementById("boton");
const cuenta = document.querySelector(".cuenta");
const cont_cuenta = document.querySelector(".cont-cuenta");

const opciones = {
  0: "🪨",
  1: "📄",
  2: "✂️",
};
sel.textContent = opciones[0];
let pc_random = null;
let cont = 0;

sel.addEventListener("click", function () {
  cont++;
  if (cont != 3) {
    sel.textContent = opciones[cont];
  } else {
    sel.textContent = opciones[0];
    cont = 0;
  }
  console.log(cont);
});
let cont2 = 1;

function CuentaRegresiva(cont2) {
  pc_random = Math.floor(Math.random() * 3);
  let interval = setInterval(function () {
    if (cont2 > 3) {
      clearInterval(interval);
      Ganador(pc_random);
      cuenta.textContent = "";
      cont_cuenta.style.display = "none";
    } else {
      cuenta.textContent = cont2;
      console.log(cont2);
      cont2++;
    }
  }, 1000);
}

function Ganador(PC) {
  sel2.style.display = "grid";
  imagen.style.display = "flex";
  if (sel.textContent === "🪨" && PC === 2) {
    return (sel2.textContent = "✂️"), (result.textContent = "GANASTE");
  } else if (sel.textContent === "🪨" && PC === 1) {
    return (sel2.textContent = "📄"), (result.textContent = "PERDISTE");
  } else if (sel.textContent === "📄" && PC === 0) {
    return (sel2.textContent = "🪨"), (result.textContent = "GANASTE");
  } else if (sel.textContent === "📄" && PC === 2) {
    return (sel2.textContent = "✂️"), (result.textContent = "PERDISTE");
  } else if (sel.textContent === "✂️" && PC === 1) {
    return (sel2.textContent = "📄"), (result.textContent = "GANASTE");
  } else if (sel.textContent === "✂️" && PC === 0) {
    return (sel2.textContent = "🪨"), (result.textContent = "PERDISTE");
  } else if (sel.textContent === "✂️" && PC === 2) {
    return (sel2.textContent = "✂️"), (result.textContent = "EMPATE");
  } else if (sel.textContent === "📄" && PC === 1) {
    return (sel2.textContent = "📄"), (result.textContent = "EMPATE");
  } else if (sel.textContent === "🪨" && PC === 0) {
    return (sel2.textContent = "🪨"), (result.textContent = "EMPATE");
  }
}

btn.addEventListener("click", function () {
  cont_cuenta.style.display = "flex";
  cont_cuenta.style.animation = "chrome 5s ease-in-out";
  CuentaRegresiva(cont2);
});

const modal = document.querySelector("#modal");
const abrirBotoes = [
  document.querySelector("#abrir-ajuda"),
  document.querySelector("#abrir-ajuda-2")
];
const fecharBotoes = [
  document.querySelector("#fechar-modal"),
  document.querySelector("#entendi")
];
let ultimoFoco = null;

function abrirModal() {
  ultimoFoco = document.activeElement;
  modal.hidden = false;
  document.querySelector("#fechar-modal").focus();
}

function fecharModal() {
  modal.hidden = true;
  if (ultimoFoco) ultimoFoco.focus();
}

abrirBotoes.forEach((botao) => botao.addEventListener("click", abrirModal));
fecharBotoes.forEach((botao) => botao.addEventListener("click", fecharModal));

modal.addEventListener("click", (evento) => {
  if (evento.target === modal) fecharModal();
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && !modal.hidden) fecharModal();
});

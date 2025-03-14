let saldo = 3100;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

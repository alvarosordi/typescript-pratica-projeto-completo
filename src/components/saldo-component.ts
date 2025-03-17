import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

renderizarSaldo();

export function renderizarSaldo(): void{
    if(elementoSaldo != null){
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar(): void{
        renderizarSaldo();
    }
}

export default SaldoComponent;
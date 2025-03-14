import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";

let saldo: number = 3100;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementoDataAcesso != null){
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso,FormatoData.DIA_SEMANA_DIA_MES_ANO);
}

export function getSaldo(): number{
    return saldo;
}

atualizarSaldo(saldo);
export function atualizarSaldo(novoValor: number): void{
    saldo = novoValor;    
    if(elementoSaldo != null){
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}
//Tipos Primitivos
let valor = 3000;
let nome = " ";
let isPago = false;
let qualquer = " ";
qualquer = 22;
// Arrays
const lista = [];
lista.push(13, 15, 22, 22.45, 1);
//Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTrasacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};

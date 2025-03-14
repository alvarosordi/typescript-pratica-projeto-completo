//Tipos Primitivos

let valor: number  = 3000;
let nome: string = " ";
let isPago : boolean = false;
let qualquer: any = " ";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(13, 15, 22, 22.45, 1);

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}


//Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTrasacao: Transacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}
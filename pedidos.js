import {produtoById} from "./produtos.js"

const pedidos = [
    {id: 1,
     cliente: "Mariana",
     itens: [
        {produtoId: 1, quantidade: 2}
     ]   
    },
    {id: 2,
        cliente: "Victor",
        itens: [
            {produtoId: 2, quantidade: 1},
            {produtoId: 3, quantidade: 3}
        ]
    },
    {id: 3,
        cliente: "Júlio",
        itens: [
            {produtoId: 14, quantidade: 3},
            {produtoId: 8, quantidade: 1}
        ]
    },
    {
        id: 4,
        cliente: "Beatriz",
        itens: [
            {produtoId: 5, quantidade: 2},
            {produtoId: 9, quantidade: 4}
        ]
    },
    {
        id: 5,
        cliente: "Carlos",
        itens: [
            {produtoId: 10, quantidade: 1}
        ]
    },
    {
        id: 6,
        cliente: "Larissa",
        itens: [
            {produtoId: 4, quantidade: 2},
            {produtoId: 7, quantidade: 2},
            {produtoId: 12, quantidade: 1}
        ]
    },
    {
        id: 7,
        cliente: "Mateus",
        itens: [
            {produtoId: 6, quantidade: 5}
        ]
    },
    {
        id: 8,
        cliente: "Fernanda",
        itens: [
            {produtoId: 11, quantidade: 3},
            {produtoId: 15, quantidade: 2}
        ]
    }
];
function pedidosExistentes(){
    for (const pedido of pedidos){
        console.log(`Pedido No. 0${pedido.id}:\n Cliente: ${pedido.cliente}`)
    }
    return "";
}
export function pedidoById(a){
    return pedidos.find(pedido => pedido.id === a)
}
export function totalPedido(pedidoId){
        const pedido = pedidoById(pedidoId)
        if (pedido == undefined){
            return console.log("Pedido não existente")
        }
        else{
        const itens = pedido.itens
        let acumular = 0;
        for (let item of itens){
            const produtos = item.produtoId
            const produto = produtoById(produtos)
            const {preco} = produto
            const {quantidade} = item
            acumular += preco * quantidade
        }
        return acumular
    }
}
export function totalTodosPedidos(){
    let acumular = 0
    for (const pedido of pedidos){
        let {id} = pedido
        const totalP = totalPedido(id)
        acumular += totalP
    }
    return acumular
}
export function mostValue(){
    let valorMaisAlto = 0;
    for (const pedido of pedidos){
        let valorAtual = totalPedido(pedido.id);
        if (valorAtual > valorMaisAlto){
            valorMaisAlto = valorAtual
        }
    }
    return valorMaisAlto
}
export default pedidosExistentes()
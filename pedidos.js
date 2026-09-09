import {produtoById} from "./produtos.js"

const pedidos = [
    {
        id: 1,
        cliente: "Mariana",
        itens: [
            {produtoId: 1, quantidade: 2}
        ]   
    },
    {
        id: 2,
        cliente: "Victor",
        itens: [
            {produtoId: 2, quantidade: 1},
            {produtoId: 3, quantidade: 3}
        ]
    },
    {
        id: 3,
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
    },
    // --- NOVOS PEDIDOS COM OS PRODUTOS RECENTES ---
    {
        id: 9,
        cliente: "Rodrigo",
        itens: [
            {produtoId: 482, quantidade: 1}, // Cafeteira Express
            {produtoId: 295, quantidade: 2}  // Garrafa Térmica
        ]
    },
    {
        id: 10,
        cliente: "Camila",
        itens: [
            {produtoId: 711, quantidade: 1}, // Smartwatch
            {produtoId: 534, quantidade: 1}  // Mochila Impermeável
        ]
    },
    {
        id: 11,
        cliente: "Felipe",
        itens: [
            {produtoId: 912, quantidade: 3}  // Livro de Programação
        ]
    },
    {
        id: 12,
        cliente: "Amanda",
        itens: [
            {produtoId: 859, quantidade: 2}, // Moletom Canguru
            {produtoId: 15, quantidade: 1}   // Fone de Ouvido
        ]
    },
    {
        id: 13,
        cliente: "Gabriel",
        itens: [
            {produtoId: 295, quantidade: 1}, // Garrafa Térmica
            {produtoId: 4, quantidade: 5}    // Biscoito
        ]
    },
    {
        id: 14,
        cliente: "Isabela",
        itens: [
            {produtoId: 534, quantidade: 1}, // Mochila Impermeável
            {produtoId: 711, quantidade: 1}, // Smartwatch
            {produtoId: 912, quantidade: 1}  // Livro de Programação
        ]
    }
];

function pedidosExistentes(){
    const peddidos = []
    for(let pedido of pedidos){ 
        peddidos.push(pedido)
    }
    return peddidos
}
export function pedidoById(a){
    return pedidos.find(pedido => pedido.id === a)
}
export function totalPedido(pedidoId){
    const pedido = pedidoById(pedidoId)
    if (pedido !== undefined){
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
    else{
        return "Pedido não existente"
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
export const resumoPedido = (id) =>{
    const pedido = pedidoById(id)
    if (pedido === undefined){
        return undefined
    }
    else{
        return pedido
    }
}
export function mostValueOrder(){
    let valorMais = 0;
    let idAtual = 0;
    for (let pedido of pedidos) {
        let { id } = pedido
        const total = totalPedido(id)
        if(valorMais < total) {
            valorMais = total
            idAtual = id
        }
    }
    const pedido = pedidoById(idAtual)
    return pedido
}

export default pedidosExistentes
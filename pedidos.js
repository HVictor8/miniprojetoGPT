
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
            {produtoId: 4, quantidade: 3},
            {produtoId: 5, quantidade: 1}
        ]
    }
]
export function pedidosExistentes(){
    for (const pedido of pedidos){
        console.log(`Pedido No. 0${pedido.id}:\n Cliente: ${pedido.cliente}`)
    }
    return "";
}

export function pedidoById(a){
    return pedidos.find(pedido => pedido.id === a)
}
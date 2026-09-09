import {nomeByPrice, verificarEstoque, produtosCaros, valorEstoque} from "./produtos.js"

import pedidosExistente, { pedidoById, totalPedido, resumoPedido, mostValueOrder } from "./pedidos.js"

//Relatório 1: Produtos que são mais caros do que o valor atribuido ao argumento
produtosCaros(1000)

//Relatório 2: Uma atualização na função atualizar estoque que retorna quais itens estão em falta
verificarEstoque()

//Relatório 3: Retorna pontualmente o valor de estoque existente 
console.log(`Nosso valor atual de estoque é: R$${valorEstoque()}`)

//Relatório 4: Apresenta um resumo do pedido solicitado, caso ele exista
resumoPedido(1)

//Relatório 5: Checando todos os pedidos, verificando seus valores finais, esse determina qual o pedido de valor mais alto
mostValueOrder()
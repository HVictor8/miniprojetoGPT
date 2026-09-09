import {nomeByPrice, verificarEstoque, produtosCaros, valorEstoque} from "./produtos.js"

import pedidosExistente, { pedidoById, totalPedido, resumoPedido, mostValueOrder } from "./pedidos.js"

//Relatório 1: Produtos que são mais caros do que o valor atribuido ao argumento
produtosCaros(1000)

//Relatório 2: Uma atualização na função atualizar estoque que retorna quais itens estão em falta
console.log(`Temos produtos zerados: ${verificarEstoque()}`)

//Relatório 3: Retorna pontualmente o valor de estoque existente 
console.log(`Nosso valor atual de estoque é: R$${valorEstoque()}`)

//Relatório 4: Apresenta um resumo do pedido solicitado, caso ele exista
console.log(resumoPedido(14))

//Relatório 5: Checando todos os pedidos, verificando seus valores finais, esse determina qual o pedido de valor mais alto
console.log(mostValueOrder())
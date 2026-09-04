import { nomeProdutos, nomeById, nomeByCat, nomeByPrice, verificarEstoque, nomeProdutoDisp, valorEstoque} from "./produtos.js";

import { pedidoById, pedidosExistentes } from "./pedidos.js";

(`Lista dos produtos cadastrados no sistema: ${nomeProdutos().join(`, `)}`)

console.log(`O item correspondente ao ID informado é: ${nomeById(6)}`)

console.log(`Os produtos cadastrados nessa categoria são: ${nomeByCat("roupas").join(`, `)}`)

console.log(`Produtos com o preço igual o maior que o definido: ${nomeByPrice(100).join(`, `)}`)

console.log(verificarEstoque())

console.log(`Esses produtos tem estoque: ${nomeProdutoDisp().join(`, `)}`)

console.log(`Valor total em estoque: R$${valorEstoque()}`)

console.log(pedidosExistentes())

console.log(pedidoById(1))
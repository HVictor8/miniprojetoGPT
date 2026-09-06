const produtos = [
    // --- ORIGINAIS ---
    {
        id: 1,
        nome: "Notebook",
        categoria: "eletronicos",
        preco: 2500,
        estoque: 5
    },
    {
        id: 2,
        nome: "Mouse",
        categoria: "componentes",
        preco: 100,
        estoque: 10
    },
    {
        id: 3,
        nome: "Café",
        categoria: "alimentos",
        preco: 30,
        estoque: 20
    },
    {
        id: 4,
        nome: "Biscoito",
        categoria: "alimentos",
        preco: 5,
        estoque: 50
    },
    {
        id: 5,
        nome: "Casaco",
        categoria: "roupas",
        preco: 150,
        estoque: 3
    },
    {
        id: 6,
        nome: "Vestido",
        categoria: "roupas",
        preco: 190,
        estoque: 0
    },
    // --- NOVOS ITENS ADICIONADOS ---
    {
        id: 7,
        nome: "Smartphone",
        categoria: "eletronicos",
        preco: 1800,
        estoque: 8
    },
    {
        id: 8,
        nome: "Teclado Mecânico",
        categoria: "componentes",
        preco: 250,
        estoque: 15
    },
    {
        id: 9,
        nome: "Monitor",
        categoria: "eletronicos",
        preco: 900,
        estoque: 4
    },
    {
        id: 10,
        nome: "Arroz",
        categoria: "alimentos",
        preco: 25,
        estoque: 40
    },
    {
        id: 11,
        nome: "Leite",
        categoria: "alimentos",
        preco: 6,
        estoque: 30
    },
    {
        id: 12,
        nome: "Calça Jeans",
        categoria: "roupas",
        preco: 120,
        estoque: 12
    },
    {
        id: 13,
        nome: "Tênis",
        categoria: "calcados",
        preco: 220,
        estoque: 7
    },
    {
        id: 14,
        nome: "Cadeira Gamer",
        categoria: "moveis",
        preco: 1100,
        estoque: 2
    },
    {
        id: 15,
        nome: "Fone de Ouvido",
        categoria: "eletronicos",
        preco: 150,
        estoque: 25
    },
    {
        id: 16,
        nome: "Chocolate",
        categoria: "alimentos",
        preco: 8,
        estoque: 0
    }
];

export function nomeProdutos(){
    return produtos.map(produto => produto.nome)
} 
// export function nomeById(a){
//     const produtoId = produtos.find((produto) => {
//         return produto.id === a;
//     });
//     if (produtoId){
//         return produtoId.nome
//     }
//     else{
//         return "ID não existe"
//     }
// }
export function nomeByCat(a){
    const produtoCat = produtos.filter((produto) => {
        return produto.categoria === a;
    });
    const listCat = produtoCat.map((list) => {
        return list.nome
    })
    if (listCat.length === 0){
        return "Categoria não possui nenhum item cadastrado"
    }
    else{
        return listCat
    }
}
export function nomeByPrice(a){
    const produtoPreco = produtos.filter(produto => produto.preco >= a)
    return produtoPreco.map(produto => produto.nome)
}
export function verificarEstoque(){
    return produtos.some(produto => produto.estoque === 0)
}
export function nomeProdutoDisp(){
    const temEstoque = produtos.filter(produto => produto.estoque)
    return temEstoque.map(produto => produto.nome)
}
export function valorEstoque(){
    let acumular = 0
    for (const produto of produtos){
        let {preco, estoque} = produto
        let valorItem = preco * estoque
        acumular += valorItem
    }
    return acumular
}
export function produtoById(a){
    const produtoId = produtos.find(produto => produto.id === a);
    
    if (produtoId){
        return produtoId
    }
    else{
        return "ID não existe"
    }

}
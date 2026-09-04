const produtos = [
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
]

export function nomeProdutos(){
    return produtos.map(produto => produto.nome)
} 
export function nomeById(a){
    const produtoId = produtos.find((produto) => {
        return produto.id === a;
    });
    if (produtoId){
        return produtoId.nome
    }
    else{
        return "ID não existe"
    }
}
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
    return produtos.some(produto => produto.estoque === 0)? "Temos produtos com estoque zerado." : "Todos os itens possuem estoque."
}
export function nomeProdutoDisp(){
    const temEstoque = produtos.filter(produto => produto.estoque)
    return temEstoque.map(produto => produto.nome)
}
export function valorEstoque(){
    let valores = [];
    let acumular = 0;
    for (const produto of produtos){
        let {preco, estoque} = produto
        let valorItem = preco * estoque
        valores.push(valorItem)
    }
    valores.forEach(valor => {
        acumular += valor
    });
    return acumular
}

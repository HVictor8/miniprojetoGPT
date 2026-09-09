const produtos = [
    {
        id: 482,
        nome: "Cafeteira Express",
        categoria: "eletrodomesticos",
        preco: 450,
        estoque: 6
    },
    {
        id: 10,
        nome: "Arroz",
        categoria: "alimentos",
        preco: 25,
        estoque: 40
    },
    {
        id: 711,
        nome: "Smartwatch",
        categoria: "eletronicos",
        preco: 350,
        estoque: 14
    },
    {
        id: 15,
        nome: "Fone de Ouvido",
        categoria: "eletronicos",
        preco: 150,
        estoque: 25
    },
    {
        id: 2,
        nome: "Mouse",
        categoria: "componentes",
        preco: 100,
        estoque: 10
    },
    {
        id: 859,
        nome: "Moletom Canguru",
        categoria: "roupas",
        preco: 180,
        estoque: 9
    },
    {
        id: 13,
        nome: "Tênis",
        categoria: "calcados",
        preco: 220,
        estoque: 7
    },
    {
        id: 6,
        nome: "Vestido",
        categoria: "roupas",
        preco: 190,
        estoque: 0
    },
    {
        id: 3,
        nome: "Café",
        categoria: "alimentos",
        preco: 30,
        estoque: 20
    },
    {
        id: 14,
        nome: "Cadeira Gamer",
        categoria: "moveis",
        preco: 1100,
        estoque: 2
    },
    {
        id: 16,
        nome: "Chocolate",
        categoria: "alimentos",
        preco: 8,
        estoque: 0
    },
    {
        id: 534,
        nome: "Mochila Impermeável",
        categoria: "acessorios",
        preco: 160,
        estoque: 11
    },
    {
        id: 5,
        nome: "Casaco",
        categoria: "roupas",
        preco: 150,
        estoque: 3
    },
    {
        id: 12,
        nome: "Calça Jeans",
        categoria: "roupas",
        preco: 120,
        estoque: 12
    },
    {
        id: 295,
        nome: "Garrafa Térmica",
        categoria: "utilidades",
        preco: 85,
        estoque: 18
    },
    {
        id: 1,
        nome: "Notebook",
        categoria: "eletronicos",
        preco: 2500,
        estoque: 5
    },
    {
        id: 9,
        nome: "Monitor",
        categoria: "eletronicos",
        preco: 900,
        estoque: 4
    },
    {
        id: 7,
        nome: "Smartphone",
        categoria: "eletronicos",
        preco: 1800,
        estoque: 8
    },
    {
        id: 11,
        nome: "Leite",
        categoria: "alimentos",
        preco: 6,
        estoque: 30
    },
    {
        id: 8,
        nome: "Teclado Mecânico",
        categoria: "componentes",
        preco: 250,
        estoque: 15
    },
    {
        id: 4,
        nome: "Biscoito",
        categoria: "alimentos",
        preco: 5,
        estoque: 50
    },
    {
        id: 912,
        nome: "Livro de Programação",
        categoria: "livros",
        preco: 65,
        estoque: 22
    }
];

export function nomeProdutos(){
    return produtos.map(produto => produto.nome)
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
export const produtosCaros = (valor) => {
    const produtos = nomeByPrice(valor)
    if (produtos.length === 0){
        console.log("Não temos produtos nesse valor")
    }
    else{
    console.log(`O itens que possuem valor igual ou maior que o valor inserido (R$${valor}) são: ${nomeByPrice(valor).join(`, `)}`)
}}
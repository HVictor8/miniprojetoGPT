const produtos = [
    {
    id: 1,
    nome: "Notebook",
    categoria: "eletrônicos",
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
    nome: "Pasta de dente",
    categoria: "higienezação",
    preco: 5,
    estoque: 0
    },
]

export function nomeProdutos(){
    const nomeProdutos = produtos.map((produto) => {
    const {nome} = produto
    return nome
})
    return nomeProdutos
}

export function nomeById(a){
    const nomeById = produtos.map(({nome}) => {
        return nome
    });
    const id = produtos.some(({id}) =>{
        return id === a
    })
    if (id){
        return console.log(nomeById[a])
    }
    else{
        return console.log("Não cadastrado")
    }
}
nomeById(4)
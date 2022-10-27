console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Brasília`); // adicionando item na lista depois dela ser declarada

console.log("Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // remover itens da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]); // acessar elemento da lista
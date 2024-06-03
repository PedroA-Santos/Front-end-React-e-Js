//Crie uma função que receba dois números como parâmetros, some esses números e retorne o resultado.


const soma = (n1, n2) => {
    return n1 + n2

}

console.log(soma(3, 3));


const par = (n1) => {
    if (n1 % 2 === 0) {
        console.log(`o número ${n1} é par`);
    } else {
        console.log(`o número ${n1} é impar`);
    }
}


console.log(par(2));
console.log(par(3));

const pessoa = {
    nome: "Pedro",
    idade: 18
}

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);

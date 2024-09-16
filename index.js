const prompt = require('prompt-sync');
const entrada = prompt();

let idade = 18;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Dayvison Wylliam Freitas De Melo Nascimento";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

anoAtual = anoAtual + 1;
idade = idade +1;

console.log(anoAtual);
console.log(idade);

//agência de viagens Dubai, New York, Maldivas, Madagascar, Chile

const listaDeDestinos = new Array(
  " Dubai",
  " New York",
  " Maldivas",
  " Madagascar",
  " Chile"
 );

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push("Austrália");
listaDeDestinos.push("Alemanha");
listaDeDestinos.push("Amazonas");
console.log(listaDeDestinos);

var nomeComprador = entrada ("Digite seu nome: ");
var idadeComprador = entrada("Qual a sua idade ?");


if(idadeComprador >=18) {
  console.log("Comprador maior de idade");
  console.log("destinos desponíveis: " + listaDeDestinos);
} else {
  console.log("Infelizmente esta indisponivel passagem para menores de 18 anos");
  console.log("você e menor de idade")
}
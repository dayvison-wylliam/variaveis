const prompt = require('prompt-sync');
const entrada = prompt();

let idade = 18;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Dayvison Wylliam Freitas De Melo nascimento";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

anoAtual = anoAtual + 1;
idade = idade +1;

console.log(anoAtual);
console.log(idade);

//agência de viagens Dubai, New York, Maldivas, Madagascar, Chile

console.log("  ");
console.log("---------------------------------------------------------");
console.log("                Agencia de Viagens                       ");
console.log("---------------------------------------------------------");
console.log("  ");

const listaDeDestinos = new Array(
  " Dubai",
  " New York",
  " Maldivas",
  " Madagascar",
  " Chile"
 );

console.log("  ");
console.log("---------------------------------------------------------");
console.log("                Lista de destinos                        ");
console.log("---------------------------------------------------------");
console.log("  ");

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push("Austrália");
listaDeDestinos.push("Alemanha");
listaDeDestinos.push("Amazonas");
console.log(listaDeDestinos);

console.log("  ");
console.log("---------------------------------------------------------");
console.log("                área de Login                            ");
console.log("---------------------------------------------------------");
console.log("  ");



const loginCerto = "Dayvison";
const senhaCerta = 123;

var login = entrada("Qual é o seu login?");
var senha = entrada("Qual é a sua senha?");

while(login != loginCerto || senha != senhaCerta){
  console.log ( "Login ou senha incorretos");
  login = entrada("Qual é o seu login? ");
  senha = entrada("digite sua senha:");
  
}

var nomeComprador = entrada("digite seu nome: ");
var idadeComprador = entrada("Qual a sua idade ?");

if(idadeComprador >=18) {
  console.log("Olá senhor(a) "+ nomeComprador);
  console.log("Comprador maior de idade");
  console.log("Destinos disponíveis: " + listaDeDestinos);
  console.log("escolha seu destinos");
  var contador = 0;

  while(contador <9){
    console.log(listaDeDestinos[contador]);
    contador ++;
  }
  var destino = entrada("Digite o número que corresponde ao destino selecionado (0-8)");
  console.log(`destino selecionado foi: ${listaDeDestinos[destino]}`);
} else {
  console.log("Olá senhor(a)" + nomeComprador);
  console.log("Infelizmente esta indisponivel passagem para menores de 18 anos");
  console.log("Você e menor de idade");
}
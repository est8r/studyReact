//funções

//objetos - explicação na pasta objects

//DESESTRUTURAÇÃO { }-------------------------------------
//utiliza os {}

function clicando(event) {
  const { clientX, clientY } = event;
}
document.addEventListener('click', clicando);
/*- podemos chamar propriedades específicas do objeto especificando
dentro do nome da const; podemos passar quantas propriedades
forem preciso*/

//---------
function clicando({ clientX, clientY }) {
  console.log(clientX, clientY);
}
document.addEventListener('click', clicando);
/*- também podemos passar as propriedades como argumento da função
 porém não teremos acesso ao event, somente as informações que queremos*/

//--------
const frutas = ['morango', 'melancia', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1); //ou fruta2, fruta3..
/*podemos desestruturar arrays usando sua sintaxe básica*/

//---------
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));
/*desestruturando array com modelo hook*/

//REST E SPREAD--------------------------------------------

//rest
function showList(empresa, clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Google', ['abel', 'the weeknd']);
/*ou usando rest (...) antes do argumento 'clientes' que irá
colocar todos os items depois de empresa dentro de um array:

const numeros = [10, 5, 20]
const maior = Math.max(...numeros)
console.log(maior)

const addNumeros = [10, 3, ...numeros, 55, 22, 88]
console.log(addNumeros)

isto vai retornar o array anterior + os numeros adicionados
nesse novo array*/

const carro = {
  cor: 'azul',
  portas: 4,
};
carroAno = { ...carro, ano: 2005 };
console.log(carroAno);
/*desestruturamos o objeto para adicionar o ano do carro
sem modificar o array original, criando uma cópia (não perfeita)
dele */

//MODULES - explicação naa pasta 'modules'

//FETCH - explicação na pasta 'fetch'

//PROMISE -

//METODOS DE ARRAY - MAP E FILTER ---------------------------

const precos = [
  'crédito',
  'R$ 200',
  'R$ 400',
  'contas pagar',
  'R$ 300',
  'R$ 400',
  'meus dados',
];

//filter
const precosFiltro = precos.filter((preco) => preco.includes('R$')); //filter recebe uma função que retorna a condição que o valor precisa ter 'R$'
//não precisa usar 'return' quando não usamos {}

console.log(precosFiltro); // vai retornar apenas os valores que possum 'r$' dentro do array (valores true)

//-------------

//map
//faz uma copia do array original + a modificação que fazemos

const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace('R$ ', '')),
); // troca o r$ por espaços vazios na nova array criada apartir da original

//EXPRESSÕES -----------------------------------------------
/*Uma expressão regular pode ser utilizada em um campo de
busca, para a substituição de caracteres em um texto, para
verificar a existência de um padrão na entrada de dados
(como um campo de CPF), entre muitas outras opções. Entre
tantos cenários, um dos mais comuns é o de validação de
textos a partir de padrões, pois permite que controlemos os
dados inseridos pelos usuários, assegurando assim o formato
esperado. */

const grupoA = 100;
const grupoB = 200;
/* essas consts são expressões. caso quisessemos saber qual
das duas possui o maior valor, não poderiamos usar if else
caso no código só pudessemos usar expressões, pois if else
não são*/

const vencedor = grupoA > grupoB ? 'Grupo A venceu' : 'Grupo B venceu';
console.log(vencedor);
//desta forma esta correto pois operador ternário é uma expressão
// arrays, contas diretas, filter são expressões

const active = true;
const button = active && 'botão ativo';

console.log(button);

/* Objetos são conjuntos de dados e/ou funcionalidades que se relacionam 
(Possuem dois tipos de atos principais: As propriedades que são variaveis 
e caracteristicas daquele objeto e os métodos, funções criadas dentro
deste mesmo objeto. */
//ex - objeto literal:

let pessoa = {
  //propriedades
  nome: ['ana', 'maria'],
  idade: 45,
  sexo: 'feminino',
  interesses: ['cozinhar', 'novelas', 'papagaios'],

  //metodos
  biografria: function () {
    alert(
      this.nome[0] +
        ' ' +
        this.nome[1] +
        ' tem ' +
        this.idade +
        ' anos de idade. Ela gosta de ' +
        this.interesses[0] +
        ' e ' +
        this.interesses[1] +
        '.',
    );
  },
  saudacao() {
    alert('Oi! Eu sou ' + this.nome[0] + '.');
  }, //as funções podem ter argumentos que deverão ser passados ao serem chamados fora do objeto
};

/*Objetos podem armazenar qualquer tipo de dado sejam eles
arrays, functions, strings, números ou etc.

A sintaxe consiste em o nome da propriedade (chave), : (dois pontos),
o valor dessa propriedade.
Caso o nome da propriedade tenha espaços, deve ser colocada entre aspas
e obrigatoriamente, acessada com colchetes:
'numero de telefone': 11987654356
pessoa['numero de telefone']

obs: se os nomes e valores forem colocados entre aspas teremos
uma objeto js puro*/

//podemos transformar uma propriedade de um objeto, em um objeto:

let pessoaDois = {
  nome: ['joão', 'carlos'],
  idade: 22,
};

//para:

let pessoaDoisAlterado = {
  nome: {
    primeiro: 'joão',
    segundo: 'carlos',
  },
  idade: 18,
};

/*para chamar esta propriedade podemos usar pessoaDoiss.nome.primeiro que irá retornar 'joão'
e não sera mais nome[0] e sim nome.primeiro*/
//podemos chamar uma propriedade por colchetes [], ex: pessoaDoisAlterado['idade'], pessoaDoisAlterado['nome']['primeiro']

//setando novos valores--------------------------------------------------------------

pessoaDoisAlterado.idade = 25; //atualiza a propriedade de 18 para 25

//criando novos falores e setando----------------------------------------------------

pessoaDoisAlterado['altura'] = 1.75;
pessoaDoisAlterado.despedida = function () {
  alert('Adeus a todos!');
};

//armazenando dados variáveis---------------------------------------------------------

let infoNome = nomeInput.value;
let infoValor = nomeValor.value;

pessoaDoisAlterado[infoNome] = infoValor; //isso vai dentro do objeto

var infoNomeEx = 'peso';
var infoValorEx = 70;
pessoaDoisAlterado[infoNomeEx] = infoValorEx; //alterando os valores da propriedade que está dentro do objeto

//excluindo dados --------------------------------------------------------------------
//usamos o operador delete

delete pessoaDoisAlterado.idade;

//verificando se aquela propriedade ou metodo existe-----------------------------------
//usamos o operador in

let animal = {
  nome: 'zeus',
  idade: 5,
  raça: 'pitbull',
  personalidade: ['dócil', 'carente', 'comilão'],
};

console.log('nome' in animal); //retorna true
console.log('cor' in animal); //retorna false

//iterar usando for...in -------------------------------------------------------------------------------
for (const key in animal) {
  console.log(animal[key]);
} //retorna: zeus, 5, pitbull, ['dócil', 'carente', 'comilão']

//THIS -------------------------------------------------------------------------------

/*this se refere ao objeto atual e é a maneira que acessamos o valor de uma propriedade 
ou chamamos um método dentro de um objeto. O objeto por ter um escopo único, precisa 
do this para chamar seus atos.
"quando começamos a criar funções construtoras, etc, o this é muito útil — sempre lhe 
assegurará que os valores corretos estão sendo usados quando o contexto de um membro 
muda (exemplo: duas instâncias diferentes do objeto pessoa podem ter diferentes nomes, 
mas vão querer usar seu próprio nome ao usar a saudação)." - mdn web docs*/

/*Math é um objeto nativo e possui propriedades e métodos assim como
console que possui log() como método */

Math.PI; //propriedade que retorna o numero de pi 3.14
Math.random(); //metodo que retorna um numero aleatorio
//quadrado roxo = metodo, retangulo azul = propriedade

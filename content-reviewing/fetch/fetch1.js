//serve para fazer requisições assincronas quando utilizamos APIS
//fetch é uma promise

fetch('https://ranekapi.origamid.dev/wp-json/api/produto') //pegando as infos da api
  .then((response) => response.json()) //transformando em json
  .then((json) => {
    console.log(json); //mostrando no console
  });

//ou podemos fazer em formato async await

//ASYNC AWAIT

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const produtos = fetchProdutos(
  'https://ranekapi.origamid.dev/wp-json/api/produto',
);

//usar await na frente de tudo que for promessa

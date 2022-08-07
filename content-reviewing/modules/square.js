//MODULES
//podemos exportar as funções diretamente

export function areaQuadrado(l) {
  return l * l;
}

export function perimetroQuadrado(l) {
  return 4 * l;
}

// ou podemos exportar em um unico objeto

const quadrado = {
  areaQuadrado,
  perimetroQuadrado,
};

export default quadrado;

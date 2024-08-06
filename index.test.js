import { soma } from "./index.js";

function testSoma() {
  // Teste 1: Verificar se a soma de 2 e 3 é igual a 5
  if (soma(2, 3) !== 5) {
    console.error("Teste 1 falhou: soma(2, 3) deveria ser 5");
  } else {
    console.log("Teste 1 passou");
  }

  // Teste 2: Verificar se a soma de -2 e -3 é igual a -5
  if (soma(-2, -3) !== -5) {
    console.error("Teste 2 falhou: soma(-2, -3) deveria ser -5");
  } else {
    console.log("Teste 2 passou");
  }

  // Teste 3: Verificar se a soma de 2 e -2 é igual a 0
  if (soma(2, -2) !== 0) {
    console.error("Teste 3 falhou: soma(2, -2) deveria ser 0");
  } else {
    console.log("Teste 3 passou");
  }
}

testSoma();

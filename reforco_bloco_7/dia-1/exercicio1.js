// * Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

const testingScope = (escopo) => {
  escopo === true ? 'Não devo ser utilizada fora do meu escopo (if)' : 'Não devo ser utilizada fora meu escopo (else)';
  return false;
};

const testingScope = (escopo) => {
  escopo === true ? 'Não devo ser utilizada fora do meu escopo (if)' : 'Não devo ser utilizada fora meu escopo (else)';
  return false;
};

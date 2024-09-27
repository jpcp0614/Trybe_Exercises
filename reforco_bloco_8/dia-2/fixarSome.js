const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some(verifyName => verifyName === name);
console.log(hasName(names, 'Ana'));
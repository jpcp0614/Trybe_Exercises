const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.
  Parâmetros:
  - Uma string;
  - Uma string;
  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true); //* ref.: 1
    // Teste que o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool Gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool Gel', 'Máscara')[1]).toBe('object');
    // Teste que os dois objetos são diferentes entre si.
    const obj1 = productDetails('Alcool Gel', 'Máscara')[0];
    const obj2 = productDetails('Alcool Gel', 'Máscara')[1];
    expect(obj1).not.toStrictEqual(obj2);
    // Teste que os dois productIds terminam com 123.
    const endAlcool = productDetails('Alcool Gel', 'Máscara')[0].details.productId.endsWith('123'); //* ref.: 2
    const endMascara = productDetails('Alcool Gel', 'Máscara')[0].details.productId.endsWith('123');
    expect(endAlcool).toBe(true);
    expect(endMascara).toBe(true);
  });
});

//* ref.1: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
//* ref.2: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
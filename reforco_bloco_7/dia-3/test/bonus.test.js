const searchEmployee = require('../src/bonus.js');

describe('Test the searchEmployee function', () => {
  it('if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toStrictEqual('function');
  });


  it('if the ID error is thrown', () => {
    expect(() => {searchEmployee('5555-5', 'lastName')}).toThrow();
  });
  it('test for "ID não identificada" message is returned when ID does not exist', () => {
    expect(() => {searchEmployee('5555-5', 'lastName')}).toThrowError(new Error('ID não identificada'));
  });


  it('if Details error is thrown', () => {
    expect(() => {searchEmployee('4678-2', 'age')}).toThrow();
  })
  it('test for "Informação indisponível" message is returned when the information does not exist', () => {
    expect(() => {searchEmployee('4678-2', 'age')}).toThrowError(new Error('Informação indisponível'));
  });


  it('if it returns the first name', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });

  it('if it returns the last name', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
  });

  it('if it returns the specialities', () => {
    expect(searchEmployee('1256-4', 'specialities')).toContain('Hooks', 'Context API', 'Tailwind CSS');
  }); // ref.: https://jestjs.io/pt-BR/docs/expect#tocontainitem
});
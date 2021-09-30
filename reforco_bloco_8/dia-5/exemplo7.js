// chamando sem passar um parâmetro
const greeting1 = (user) => console.log(`Welcome ${user}!`);
greeting1(); // Welcome undefined!


const greeting2 = user => {
  const userDisplay = typeof user === 'undefined' ? 'usuário2' : user;
  console.log(`Welcome ${userDisplay}!`);
};
greeting2('greeting2');
greeting2();


const greeting3 = (user = 'usuário3') => console.log(`Welcome ${user}!`);
greeting3('greeting3');
greeting3();

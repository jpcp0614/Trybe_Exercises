// mensagem de envio de email
const arrayOfEmails = [
  'ana.lovalace@example.com',
  'marie.curir@example.com',
  'alan.turing@example.com'
];

arrayOfEmails.forEach((element, index) => {
  console.log(`Email para ${element} enviado com sucesso!`);
  console.log(`Posição ${index}`)
});

// letras maiúsculas
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
names.forEach((element, index) => {
  names[index] = element.toUpperCase();  
});
console.log(names);
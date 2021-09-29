const arrayOfEmails = [
  'ana.lovalace@example.com',
  'marie.curir@example.com',
  'alan.turing@example.com'
];

const email = objEmail => console.log(`Aprovados: Email para ${objEmail.email} enviado com sucesso!`);

const arrayApproved = arrayOfEmails.map(email => {
  return {  email: email }
});

const sendEmail = arrayApproved.forEach((obj) => email(obj));

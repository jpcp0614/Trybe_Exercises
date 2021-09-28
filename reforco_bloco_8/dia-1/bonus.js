const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//* Parte I

/*
* 1) Crie uma função que retorna o dano do dragão.
*    O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
*/    
const dragonAttack = dragonDmg => {
  const dmgMin = 15;
  const { strength } = dragonDmg;
  return Math.floor(Math.random() * (strength - dmgMin)) + dmgMin;
};
console.log(dragonAttack(dragon));

/*
* 2) Crie uma função que retorna o dano causado pelo warrior .
*    O dano será um número aleatório entre o valor do atributo strength (dano mínimo)
*    e o valor de strength * weaponDmg (dano máximo).
*/
const warriorAttack = warriorDmg => {
  const { weaponDmg } = warriorDmg;
  const dmgMin = warrior.strength;
  const dmgMax = dmgMin * weaponDmg;
  return Math.floor(Math.random() * (dmgMax - dmgMin)) + dmgMin;
};
console.log(warriorAttack(warrior));

/*
* 3) Crie uma função que retorna um objeto com duas chaves e dois valores
*    contendo o dano e a mana gasta pelo mago em um turno.
*    O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo)
*    e o valor de intelligence * 2 (dano máximo).
*    A mana consumida por turno é 15. Além disto a função deve ter uma condicional,
*    caso o mago tenha menos de 15 de mana o valor de dano recebe uma
*    mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
*/
const mageAttack = (mage) => {
  const dmgMin = mage.intelligence;
  const dmgMax = dmgMin * 2;
  const mageMana = mage.mana;
  const round = {
    damageRound: 'Não possui mana suficiente',
    manaRound: 0
  };
  
  if (mageMana > 15) {
    const damage = Math.floor(Math.random() * (dmgMax - dmgMin)) + dmgMin;
    round.manaRound = 15;
    round.damageRound = damage;
    return round;
  };
  return round;
};
console.log(mageAttack(mage));


//* Parte II

/*
* 1) Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno
*    do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido
*    pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também
*    deve atualizar o valor da chave damage do warrior.

* 2) Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do
*    personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo
*    personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar
*    o valor das chaves damage e mana do mage.

* 3) Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon.
*    Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os
*    healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
*/
const gameActions = {
  damageDealtByWarrior: (warriorAttack) => {
    const warriorDmg = warriorAttack(warrior);
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warriorDmg;
  },
  damageDealtByMage: (mageAttack) => {
    const mageTurn = mageAttack(mage);
    const mageDamageTurn = mageTurn.damageRound;
    const { manaRound } = mageTurn;
    mage.damage = mageDamageTurn;
    mage.mana -= manaRound;
    dragon.healthPoints -= mageTurn;
  }
};
gameActions.damageDealtByWarrior(warriorAttack);
gameActions.damageDealtByMage(mageAttack);
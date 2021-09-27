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

// * Parte I

//* 1) Crie uma função que retorna o dano do dragão.
//*    O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = (damage) => {
  const dmgMin = 15;
  const dmgMax = dragon.strength;
  return Math.floor(Math.random() * (dmgMax - dmgMin)) + dmgMin;
};
console.log(dragonDamage(dragon));

//* 2) Crie uma função que retorna o dano causado pelo warrior .
//*    O dano será um número aleatório entre o valor do atributo strength (dano mínimo)
//*    e o valor de strength * weaponDmg (dano máximo).

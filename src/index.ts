import { Necromancer, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Halfling, Orc } from './Races';
import getRandomInt from './utils';

const player1 = new Character('Dionisius');
const player2 = new Character(
  'Fabius',
  new Orc('Fabius', getRandomInt(1, 10)),
  new Warrior('Fabius'),
);
const player3 = new Character(
  'Cesares',
  new Halfling('Cesares', getRandomInt(1, 10)),
  new Necromancer('Cesares'),
);
const monster1 = new Monster();
const monster2 = new Dragon();

for (let i = 1; i <= 15; i += 1) {
  player1.levelUp();
}

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  const battlesResult = battles.map((battle) => battle.fight());
  return battlesResult;
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
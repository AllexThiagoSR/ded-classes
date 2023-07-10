import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

type AttributesThatUp = 'dexterity' | 'maxLifePoints' | 'strength' | 'defense';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string; 

  constructor(name: string, race?: Race, archetype?: Archetype) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = race || new Elf(name, this._dexterity);
    this._archetype = archetype || new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get name() {
    return this._name;
  }

  public get archetype(): Archetype {
    return this.archetype;
  }

  public get race(): Race {
    return this._race;
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  public get strength() {
    return this._strength;
  }

  public get defense() {
    return this._defense;
  }

  public get dexterity() {
    return this._dexterity;
  }

  public get energy() {
    return { ...this._energy };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    this._lifePoints -= damage > 0 ? damage : 1;
    this._lifePoints = this.lifePoints < 0 ? -1 : this.lifePoints;
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  private increaseAttribute = (attributeName: AttributesThatUp) => {
    this[`_${attributeName}`] += getRandomInt(1, 10) as number;
  };

  private increaseMaxLife = () => {
    if (this._maxLifePoints < this.race.maxLifePoints) {
      this.increaseAttribute('maxLifePoints');
      if (this._maxLifePoints > this.race.maxLifePoints) { 
        this._maxLifePoints = this.race.maxLifePoints; 
      }
    }
  };

  public levelUp(): void {
    this._energy.amount = 10;
    this.increaseMaxLife();
    this._lifePoints = this._maxLifePoints;
    this.increaseAttribute('defense');
    this.increaseAttribute('strength');
    this.increaseAttribute('dexterity');
  }
}

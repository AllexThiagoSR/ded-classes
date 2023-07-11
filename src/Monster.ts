import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get strength() {
    return this._strength;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  public receiveDamage = (attackPoints: number): number => {
    this._lifePoints -= attackPoints;
    this._lifePoints = this.lifePoints < 0 ? -1 : this.lifePoints;
    return this._lifePoints;
  };
}

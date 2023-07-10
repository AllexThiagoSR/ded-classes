import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  static createdInstanceQuantity = 0;

  constructor(name: string) {
    super(name);
    Necromancer.createdInstanceQuantity += 1;
  }

  public static createdArchetypeInstances = () => Necromancer
    .createdInstanceQuantity;

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

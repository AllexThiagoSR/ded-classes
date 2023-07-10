import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static createdInstancesQuantity = 0;

  constructor(name: string) {
    super(name);
    Warrior.createdInstancesQuantity += 1;
  }

  public static createdArchetypeInstances = () => Warrior
    .createdInstancesQuantity;

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

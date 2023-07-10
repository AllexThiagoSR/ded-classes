import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static createdInstancesQuantity = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.createdInstancesQuantity += 1;
  }

  public static createdArchetypeInstances = () => Mage.createdInstancesQuantity;

  get energyType(): EnergyType { return this._energyType; }
}

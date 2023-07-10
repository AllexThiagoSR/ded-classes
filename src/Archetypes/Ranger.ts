import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static createdInstanceQuantity = 0;

  constructor(name: string) {
    super(name);
    Ranger.createdInstanceQuantity += 1;
  }

  public static createdArchetypeInstances = () => Ranger
    .createdInstanceQuantity;

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

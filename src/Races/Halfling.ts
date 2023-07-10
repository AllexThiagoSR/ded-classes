import Race from './Race';

export default class Halfling extends Race {
  static createdInstancesQuantity = 0;
  private MAX_LIFE_POINTS = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.createdInstancesQuantity += 1;
  }

  get maxLifePoints(): number {
    return this.MAX_LIFE_POINTS;
  }

  public static createdRacesInstances = () => Halfling.createdInstancesQuantity;
}

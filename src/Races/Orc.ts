import Race from './Race';

export default class Orc extends Race {
  static createdInstancesQuantity = 0;
  private MAX_LIFE_POINTS = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.createdInstancesQuantity += 1;
  }

  get maxLifePoints() {
    return this.MAX_LIFE_POINTS;
  }

  public static createdRacesInstances = () => Orc.createdInstancesQuantity;
}
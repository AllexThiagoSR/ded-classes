import Race from './Race';

export default class Dwarf extends Race {
  private MAX_LIFE_POINTS = 80;
  static createdInstancesQuantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.createdInstancesQuantity += 1;
  }

  get maxLifePoints() {
    return this.MAX_LIFE_POINTS;
  }

  public static createdRacesInstances = (): number => Dwarf
    .createdInstancesQuantity;
}

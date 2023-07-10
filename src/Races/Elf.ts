import Race from './Race';

export default class Elf extends Race {
  protected MAX_LIFE_POINTS = 99;
  static createdIntancesQuantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.createdIntancesQuantity += 1;
  }

  public static createdRacesInstances = (): number => Elf
    .createdIntancesQuantity;

  get maxLifePoints() {
    return this.MAX_LIFE_POINTS;
  }
}
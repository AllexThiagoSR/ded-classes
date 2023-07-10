export default abstract class Race {
  protected _name: string;
  protected _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get dexterity() {
    return this._dexterity;
  }

  public get name() {
    return this._name;
  }

  public static createdRacesInstances = () => { 
    throw new Error('Not implemented'); 
  };

  abstract get maxLifePoints(): number;
}

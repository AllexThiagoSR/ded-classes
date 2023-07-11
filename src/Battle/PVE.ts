import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _npcs: SimpleFighter[];

  constructor(player: Fighter, npcs: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._npcs = npcs;
  }

  private fightAgainsOne = (npc: SimpleFighter) => {
    let turn = 1;
    while (this._player.lifePoints !== -1 && npc.lifePoints !== -1) {
      if (turn === 1) {
        this._player.attack(npc);
        turn = 2;
      } else {
        npc.attack(this._player);
        turn = 1;
      }
    }
  };

  public fight(): number {
    for (let index = 0; index < this._npcs.length; index += 1) {
      const npc = this._npcs[index];
      this.fightAgainsOne(npc);
      if (this._player.lifePoints === -1) break;
    }
    return super.fight();
  }
}

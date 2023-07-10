import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1: SimpleFighter;
  private _player2: SimpleFighter;
  constructor(player1: SimpleFighter, player2: SimpleFighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  public fight(): number {
    let playerTurn = 1;
    while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      if (playerTurn === 1) {
        this._player1.attack(this._player2);
        playerTurn = 2;
      } else {
        this._player2.attack(this._player1);
        playerTurn = 1;
      }
    }
    return super.fight();
  }
}

export default PVP;
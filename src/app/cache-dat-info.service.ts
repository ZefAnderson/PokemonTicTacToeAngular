import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class CacheDatInfoService {

  constructor() { }

  player1: Player = new Player;
  player2: Player = new Player;

  savePlayerData(player: Player){
    if (player.id == 1) {
      this.player1 = player;
    } else {
      this.player2 = player;
    }
  }
}

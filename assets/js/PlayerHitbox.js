import GameEnv from './GameEnv.js';
import Character from './Character.js';
import CharacterPlayer from './Player.js';

export class Hitbox extends CharacterPlayer {
  constructor(characterPlayer) {
    this.x = characterPlayer.x;
    this.y = characterPlayer.y;
  }
}
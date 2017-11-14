import Phaser from '../../phaser';

// move from multiple images to sprite sheets per tile type
const textureMap = {
  empty: ['hex', 'hex-active'],
  grass: ['hex-grass', 'hex-grass-active'],
  water: ['hex-water', 'hex-water-active'],
};

const textureStateMap = ['default', 'active'];

const getTexture = (texture = 'empty', state = 'default') => {
  const stateIndex = textureStateMap.indexOf(state);
  if (stateIndex > -1 && texture in textureMap) {
    return textureMap[texture][stateIndex];
  }
  return 'hex';
};

export default class HexTile extends Phaser.Sprite {
  constructor(game, x, y, texture = 'empty') {
    super(game, x, y, getTexture(texture));
    this.startingTexture = texture;
    this.currentTexture = this.startingTexture;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.events.onInputOut.add(this.rollOut, this);
    this.events.onInputOver.add(this.rollOver, this);

    this.autoCull = true; // perf attempt 100+
  }
  rollOut() {
    this.currentTexture = getTexture(this.startingTexture);
    this.loadTexture(this.currentTexture, 0);
  }
  rollOver() {
    this.currentTexture = getTexture(this.startingTexture, 'active');
    this.loadTexture(this.currentTexture, 0);
  }
}

import Phaser from '../../phaser';
import HexTile from './HexTile';

// Pointy top hex
// height = size * 2
// width = sqrt(3)/2 * height

// Flat topped hex
// width = size * 2
// height = sqrt(3)/2 * width

export default class HexGrid extends Phaser.Group {
  constructor(game, gridParams) {
    super(game);
    this.gridOptions = {
      hexesWide: 10,
      hexesHigh: 5,
      startX: 0,
      startY: 0,
      ...gridParams,
    };
    const gap = 6;
    const hexTileHeight = 101 + gap;
    const hexTileWidth = 87 + gap;
    let verticalOffset = hexTileHeight * 3 / 4;
    let horizontalOffset = hexTileWidth;
    let startXInit = hexTileWidth / 2;
    let startYInit = hexTileHeight / 2;
    let tileX;
    let tileY;
    for (let heightIndex = 0; heightIndex < this.gridOptions.hexesHigh; heightIndex++) {
      if (heightIndex % 2 !== 0) {
        tileX = 2 * startXInit;
      } else {
        tileX = startXInit;
      }
      tileY = startYInit + heightIndex * verticalOffset;
      for (var widthIndex = 0; widthIndex < this.gridOptions.hexesWide; widthIndex++) {
        this.add(new HexTile(game, tileX, tileY));
        tileX += horizontalOffset;
      }
    }
  }
}

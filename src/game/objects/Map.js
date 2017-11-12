import Phaser from '../../phaser';
import HexTile from './HexTile';

// Pointy top hex
// height = size * 2
// width = sqrt(3)/2 * height

// Flat topped hex
// width = size * 2
// height = sqrt(3)/2 * width

/*
const mapObject = [
  [{texture: ''}, {texture: ''}, {texture: ''}],
  [{texture: ''}, {texture: ''}, {texture: ''}],
  [{texture: ''}, {texture: ''}, {texture: ''}],
];
*/
const genMap = (numberOfColumns, numberOfRows) => {
  const map = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      let column = Math.round(Math.random()) ? { texture: 'water' } : { texture: 'grass' };
      row.push(column);
    }
    map.push(row);
  }
  return map;
};

export default class Map extends Phaser.Group {
  constructor(game, mapParams) {
    super(game);
    this.game = game;
    this.mapOptions = {
      padding: 300,
      columns: 10,
      rows: 5,
      startX: 0,
      startY: 0,
      ...mapParams,
    };
    this.x = this.mapOptions.padding / 2;
    this.y = this.mapOptions.padding / 2 - 30; // work out why it doesn't quite center vertically

    this.mapObject = genMap(this.mapOptions.columns, this.mapOptions.rows);
    const gap = 6;
    const hexTileHeight = 101 + gap;
    const hexTileWidth = 87 + gap;
    let verticalOffset = hexTileHeight * 3 / 4;
    let horizontalOffset = hexTileWidth;
    let startXInit = hexTileWidth / 2;
    let startYInit = hexTileHeight / 2;
    let tileX;
    let tileY;
    this.mapObject.forEach((row, rowIndex) => {
      if (rowIndex % 2 !== 0) {
        tileX = 2 * startXInit;
      } else {
        tileX = startXInit;
      }
      tileY = startYInit + rowIndex * verticalOffset;
      row.forEach((tile, tileIndex) => {
        this.add(new HexTile(game, tileX, tileY, tile.texture));
        tileX += horizontalOffset;
      });
    });
  }
  getCenterX() {
    return this.getWidth() / 2;
  }
  getCenterY() {
    return this.getHeight() / 2;
  }
  getWidth() {
    return this.width + this.mapOptions.padding;
  }
  getHeight() {
    return this.height + this.mapOptions.padding;
  }
}

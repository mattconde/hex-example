import HexTile from './HexTile';

export default class HexGrid {
  constructor(game, mapParams) {
    const mapOptions = {
      hexesWide: 2,
      hexesHigh: 2,
      isVertical: true,
      hexSize: 10,
      startX: 0,
      startY: 0,
      ...mapParams,
    };
    this.gridGroup = game.add.group();

    let hexWidth = mapOptions.hexSize * 2;
    let horizontalOffset = hexWidth * 1.5;
    let verticalOffset = hexWidth;
    let startXInit = mapOptions.startX + mapOptions.hexSize / 2;
    let startYInit = mapOptions.startY + mapOptions.hexSize / 2;

    for (var widthIndex = 0; widthIndex < mapOptions.hexesWide; widthIndex++) {
      for (var heightIndex = 0; heightIndex < mapOptions.hexesHigh; heightIndex++) {
        let tileX = startXInit + widthIndex * horizontalOffset;
        let tileY = startYInit + heightIndex * verticalOffset;
        let hex = new HexTile(game, tileX, tileY, mapOptions.hexSize);
        this.gridGroup.add(hex);
      }
    }
  }
  getGridGroup() {
    return this.gridGroup;
  }
}

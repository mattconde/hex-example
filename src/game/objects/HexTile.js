import Phaser from '../../phaser';

function hexPoly(x, y, size) {
  let side = 0;
  let points = [];
  for (side; side < 7; side++) {
    points.push(
      new Phaser.Point(
        x + size * Math.cos(side * 2 * Math.PI / 6),
        y + size * Math.sin(side * 2 * Math.PI / 6)
      )
    );
  }
  return new Phaser.Polygon(points);
}

export default class HexTile {
  constructor(game, x, y, size) {
    this.poly = hexPoly(x, y, size);
  }
  getPoly() {
    return this.poly;
  }
  // EXAMPLE METHODS
  rollOut() {
    this.scale.x = 1;
    this.scale.y = 1;
  }
  // EXAMPLE METHODS
  rollOver() {
    this.scale.x = 0.9;
    this.scale.y = 0.9;
  }
  // EXAMPLE METHODS
  scaleHexagons(scale) {
    this.hexagonGroup.forEach(function(hexagon) {
      this.game.add.tween(hexagon.scale).to({ x: scale, y: scale }, 800, 'Linear', true);
    }, this);
  }
}

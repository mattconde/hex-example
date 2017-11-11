import Phaser from '../../phaser';
import { runIfDev } from '../utils';
import HexTile from '../objects/HexTile';
import HexGrid from '../objects/HexGrid';

let count = 0;

function renderHex(game, points) {
  let gridGraphics = game.add.graphics();
  gridGraphics.beginFill(0xff33ff);
  gridGraphics.drawPolygon(points);
  gridGraphics.endFill();
  return gridGraphics;
}

export default class extends Phaser.State {
  init() {}
  preload() {}

  create() {
    const bannerText = 'Phaser + ES6 + Webpack';
    const banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText);
    banner.font = 'Bangers';
    banner.padding.set(10, 16);
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.smoothed = false;
    banner.anchor.setTo(0.5);
    this.game.time.advancedTiming = true;

    // let hex1 = new HexTile(this.game, 100, 100, 20);
    // renderHex(this.game, hex1.getPoly().points);

    let grid1 = new HexGrid(this.game, {
      startX: 100,
      startY: 100,
    });

    // grid1.getGridGroup().forEach(h => {
    //   console.log(h);
    //   renderHex(this.game, h.getPoly().points);
    // });
  }

  update() {
    if (this.input.activePointer.isDown) {
      count = count + 1;
      console.log(count);
    }
  }

  render() {
    runIfDev(() => {
      this.game.debug.text(this.game.time.fps, 2, 14, '#00ff00');
      this.game.debug.pointer(this.game.input.mousePointer);
      this.game.debug.pointer(this.game.input.pointer1);
    });
  }
}

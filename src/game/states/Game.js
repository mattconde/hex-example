import Phaser from '../../phaser';
import { runIfDev } from '../utils';
import Map from '../objects/Map';

export default class extends Phaser.State {
  init() {}
  preload() {}
  create() {
    this.game.time.advancedTiming = true;
    this.game.kineticScrolling.configure({
      horizontalScroll: true,
      verticalScroll: true,
      horizontalWheel: false,
      verticalWheel: true,
    });
    this.game.kineticScrolling.start();

    let exampleMap = new Map(this.game, {
      columns: 200,
      rows: 200,
    });
    this.game.add.existing(exampleMap);
    this.world.setBounds(0, 0, exampleMap.getWidth(), exampleMap.getHeight());
    this.camera.x = this.world.centerX - this.game.width / 2;
    this.camera.y = this.world.centerY - this.game.height / 2;
  }
  update() {}
  render() {
    runIfDev(() => {
      this.game.debug.text(this.game.time.fps, 2, 14, '#f00');
      this.game.debug.pointer(this.game.input.mousePointer);
      this.game.debug.cameraInfo(this.game.camera, 32, 32);
    });
  }
}

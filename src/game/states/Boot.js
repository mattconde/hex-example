import Phaser from '../../phaser';
import 'phaser-kinetic-scrolling-plugin';

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#ffffff';
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
  }

  preload() {
    const text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', {
      font: '16px Arial',
      fill: '#020202',
      align: 'center',
    });
    text.anchor.setTo(0.5, 0.5);

    this.load.image('loaderBg', './assets/loader-bg.png');
    this.load.image('loaderBar', './assets/loader-bar.png');
    this.load.image('hex', './assets/hex.png');
    this.load.image('hex-active', './assets/hex-active.png');
    this.load.image('hex-grass', './assets/hex-grass.png');
    this.load.image('hex-grass-active', './assets/hex-grass-active.png');
    this.load.image('hex-water', './assets/hex-water.png');
    this.load.image('hex-water-active', './assets/hex-water-active.png');
    this.game.kineticScrolling = this.game.plugins.add(Phaser.Plugin.KineticScrolling);
  }

  render() {
    this.state.start('Splash');
  }

  fontsLoaded() {
    this.fontsReady = true;
  }
}

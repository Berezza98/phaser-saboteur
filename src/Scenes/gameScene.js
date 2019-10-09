import "phaser";

import Card from "../Sprites/card";

export default class GameScene extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  init() {
    this.cardFrame = {
      height: 177.4,
      width: 120
    };
  }

  create() {
      this.group = this.add.group({
      key: 'playCards',
      frame: [0],
      frameQuantity: 45
    });

    this.grid = Phaser.Actions.GridAlign(this.group.getChildren(), {
        width: 9,
        height: 5,
        cellWidth: this.cardFrame.width,
        cellHeight: this.cardFrame.height,
        x: 100,
        y: 100
    });

    this.grid.forEach(el => {
      el.setInteractive();
      el.input.dropZone = true;
    });

    new Card(this, 100, 100, 1).setOrigin(0);
    new Card(this, 100, 100, 1).setOrigin(0);
    new Card(this, 100, 100, 1).setOrigin(0);
    
  }
}
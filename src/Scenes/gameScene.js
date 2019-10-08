import "phaser";

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

    this.card = this.add.sprite(0, 0, "playCards", 1).setOrigin(0);
    this.card.setInteractive();
    this.input.setDraggable(this.card);
    this.card.on('drag', function (pointer, dragX, dragY) {
      this.setPosition(dragX, dragY);
    });
    this.card.on('drop', function (pointer, target) {
      this.setOrigin(0.5);
      this.setPosition(target.x, target.y, target.width, target.height);
      this.scene.input.setDraggable(this, false);
      this.scene.sound.play("dealindCard");
    });
  }
}
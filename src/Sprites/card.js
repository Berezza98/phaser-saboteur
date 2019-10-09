import "phaser";

export default class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, frame) {
    super(scene, x, y, "playCards", frame);
    this.scene = scene;
    this.setInteractive();
    this.scene.input.setDraggable(this);
    this.scene.add.existing(this);

    this.on('drag', this.dragging);
    this.on('drop', this.dropping);
  }

  dragging(pointer, dragX, dragY) {
    this.setPosition(dragX, dragY);
  }

  dropping(pointer, target) {
    this.setOrigin(0.5);
    this.setPosition(target.x, target.y, target.width, target.height);
    this.scene.input.setDraggable(this, false);
    this.scene.sound.play("dealindCard");
  }
}
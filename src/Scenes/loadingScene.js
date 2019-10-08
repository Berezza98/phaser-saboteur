import "phaser";

import playCards from "../assets/images/cards.png";
import dealingCardSound from "../assets/audio/dealing-card.mp3"

export default class LoadingScene extends Phaser.Scene {
  constructor(key) {
    super(key);

    this.cardFrame = {
      height: 177.4,
      width: 120
    };
  }

  init() {
    this.gameWidth = this.sys.game.config.width;
    this.gameHeight = this.sys.game.config.height;
  }

  preload() {
    this.setBackground();
    this.showLoading();
    this.load.spritesheet("playCards", playCards, { frameWidth: this.cardFrame.width, frameHeight: this.cardFrame.height });
    this.load.audio("dealindCard", dealingCardSound);
    for (let i = 0; i < 1000; i++) {
      this.load.audio("dealindCard" + i, dealingCardSound);
    }
  }

  create() {
    console.log("loaging scene created");
  }

  setBackground() {
    this.background = this.add.image(0, 0, "background");
    this.background.setDisplaySize(this.gameWidth, this.gameHeight);
    this.background.setOrigin(0);
  }

  showLoading() {
    this.gameIcon = this.add.sprite(0, 0, "loadingIcon").setOrigin(0.5);
    this.gameIcon.setPosition(this.gameWidth / 2, this.gameHeight / 2 - 100);
    this.gameIcon.setScale(0.4);
    this.tweens.add({
      targets: this.gameIcon,
      scaleX: 0.5,
      scaleY: 0.5,
      duration: 500,
      repeat: -1,
      paused: false,
      yoyo: true,
      ease: "Quad.easeInOut"
    });

    this.loadingBackground = this.add.graphics();
    this.loadingBackground.fillStyle(0x000000, 0.5);
    this.loadingBackground.fillRect(150, this.gameHeight / 2 + 50, this.gameWidth - 300, 30);

    this.loading = this.add.graphics();
    this.loading.fillStyle(0x1c14ff, 1);
    this.load.on("progress", progress => {
      this.loading.clear();
      this.loading.fillRect(150, this.gameHeight / 2 + 50, (this.gameWidth - 300) * progress, 30);
    }, this);
    this.load.on("complete", () => {
      this.scene.start("gameScene")
    }, this);
  }
}
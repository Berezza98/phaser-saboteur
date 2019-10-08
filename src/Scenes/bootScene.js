import "phaser";
import loadingIcon from "../assets/images/loading-icon.png";
import woodBackground from "../assets/images/wood-background.jpg";

export default class BootScene extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    this.load.image("loadingIcon", loadingIcon);
    this.load.image("background", woodBackground);
  }

  create() {
    console.log("boot scene created");
    this.scene.start("LoadingScene");
  }
}
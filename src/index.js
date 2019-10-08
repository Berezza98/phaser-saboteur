import Phaser from "phaser";
import config from "./config";
import bootScene from "./Scenes/bootScene";
import loadingScene from "./Scenes/loadingScene";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("BootScene", bootScene);
    this.scene.add("LoadingScene", loadingScene);
    this.scene.start("BootScene");
  }
}

const game = new Game();
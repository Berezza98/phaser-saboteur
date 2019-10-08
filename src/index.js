import Phaser from "phaser";
import config from "./config";
import bootScene from "./Scenes/bootScene";
import loadingScene from "./Scenes/loadingScene";
import gameScene from "./Scenes/gameScene";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("BootScene", bootScene);
    this.scene.add("LoadingScene", loadingScene);
    this.scene.add("GameScene", gameScene);
    this.scene.start("BootScene");
  }
}

window.game = new Game();

window.addEventListener("resize", (e) => {
  // console.log(window.game);
  // window.game.scale.resize(window.innerWidth, window.innerHeight);
});
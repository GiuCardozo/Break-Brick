import Game from "./scenes/Game.js";
import End from "./GameOver.js";

// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Game, End],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);

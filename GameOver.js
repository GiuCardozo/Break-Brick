export default class End extends Phaser.Scene {
    constructor(){
        super("GameOver");
        }
        
        create(){
            this.add.text(400, 350, "Game Over", {
              fontSize: 64,
              color: "#ffffff",
            });
            
            this.r = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

            const help= this.add.text(450, 700, "Press <R> to restart", {fontSize:"15px"});
        }

        update(){
            if (this.r.isDown) {
                this.scene.start("game");
        }
    }

}
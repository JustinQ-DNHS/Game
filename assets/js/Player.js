import GameEnv from './GameEnv.js';
import Character from './Character.js';

const PlayerAnimation = {
    // Sprite properties
    scale: 0.15,
    width: 798,
    height: 735,
	d: { row: 0, frames: 20, idleFrame: { column: 7, frames: 0 } }, // Walk right with 'd' key
    w: { row: 1, frames: 32, idleFrame: {column: 7, frames: 0}}, // Jump up with 'w' key
	a: { row: 6, frames: 10, idleFrame: { column: 7, frames: 0 } }, // Walk left with 'a' key
    s: { row: 2, frames: 40, idleFrame: { column: 7, frames: 0}}, //Goes down with 's' key
}

export class CharacterPlayer extends Character{
    // constructors sets up Character object 
    constructor(playerCanvas, image, speedRatio){
        super(playerCanvas, 
            image, 
            speedRatio,

            //Connects to the sprite propeties in player animation
            PlayerAnimation.width, 
            PlayerAnimation.height, 
            PlayerAnimation.scale
        );
        this.isIdle = true;

        //Properties that control the player's vertical motion
        this.velocityY = 0;
        this.gravity = 0.5;
    }

    // Player perform a unique update
    update() {
        if (this.frameY === PlayerAnimation.a.row && !this.isIdle) {
            this.x -= this.speed;  // Move the Player to the Left
        }
        else if (this.frameY === PlayerAnimation.d.row && !this.isIdle){
            this.x += this.speed; // Move the player to the Right
        } else if (this.frameY === PlayerAnimation.w.row && !this.isIdle) {
            this.y -= this.VelocityY; // Move the Player Up
            this.velocityY -= this.gravity;

            // Prevents player from moving above the canvas
            if (this.y < 0) {
                this.y = 0;
                this.velocity = 0;
            }
        }
        else if (this.frameY === PlayerAnimation.s.row && !this.isIdle) {
            this.y += this.speed; // Move the Player Down
        }

        // Update animation frameX of the object
        if (this.frameX < this.maxFrame) {
            this.frameX++;
        } else {
            this.frameX = 0;
        }
    }
}

// Can add specific initialization parameters for the Player here
// In this case the Player is following the default character initialization
export function initPlayer(canvasId, image, gameSpeed, speedRatio) {
    // Create the Player character
    var player = new CharacterPlayer(canvasId, image, gameSpeed, speedRatio);

    // Player Frame position and Frame extents
    player.setFrameY(PlayerAnimation['a'].row);
    player.setFrameX(PlayerAnimation['a'].idleFrame.column)
    player.setMaxFrame(PlayerAnimation['a'].idleFrame.frames);

    // Player Screen Position
    player.setX(100);
    player.setY(500);

    // New event listeners for keydown and keyup events
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 65: // 'A' key
                player.setFrameY(PlayerAnimation['a'].row);
                player.setMaxFrame(PlayerAnimation['a'].frames);
                player.isIdle = false;
                break;
            case 68: // 'D' key
                player.setFrameY(PlayerAnimation['d'].row);
                player.setMaxFrame(PlayerAnimation['d'].frames);
                player.isIdle = false;
                break;
            case 87: // 'W' key
                player.setFrameY(PlayerAnimation['w'].row);
                player.setMaxFrame(PlayerAnimation['w'].frames);
                player.isIdle = false;
                break;
            case 83: // 'S' key
                player.setFrameY(PlayerAnimation['s'].row);
                player.setMaxFrame(PlayerAnimation['s'].frames);
                player.isIdle = false;
                break;
        }
    });

    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 65: // 'A' key
            case 68: // 'D' key
            case 87: // 'W' key
            case 83: // 'S' key
                // When any movement key is released, set isIdle to true
                player.isIdle = true;
                break;
        }
    });

    // Player Object
    return player;
}

export default CharacterPlayer;
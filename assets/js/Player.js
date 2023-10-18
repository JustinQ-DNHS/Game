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
            PlayerAnimation.width, 
            PlayerAnimation.height, 
            PlayerAnimation.scale
        );
        this.isIdle = true;
    }

    // Player perform a unique update
    update() {
        if (this.frameY === PlayerAnimation.a.row && !this.isIdle) {
            this.x -= this.speed;  // Move the Player to the left
        }
        else if (this.frameY === PlayerAnimation.d.row && !this.isIdle){
            this.x += this.speed;
        } else if (this.frameY === PlayerAnimation.w.row && !this.isIdle) {
            this.y -= this.speed;
        }
        else if (this.frameY === PlayerAnimation.s.row && !this.isIdle) {
            this.y += this.speed;
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
export function initPlayer(canvasId, image, gameSpeed, speedRatio){
    // Create the Player character
    var player = new CharacterPlayer(canvasId, image, gameSpeed, speedRatio);

    // Player Frame position and Frame extents
    player.setFrameY(PlayerAnimation['a'].row);
    player.setFrameX(PlayerAnimation['a'].idleFrame.column)
    player.setMaxFrame(PlayerAnimation['a'].idleFrame.frames);

    // Player Screen Position
    player.setX(GameEnv.innerWidth);
    player.setY(GameEnv.innerHeight / 1.5);

    /* Player Control 
    * changes y value, the row in sprite
    * which changes animation to either idle, bark, walk
    * change number of frames in row
    */
    document.addEventListener('keydown', function (event) {
        if (PlayerAnimation.hasOwnProperty(event.key)) {
            const selectedAnimation = event.key;
            player.setFrameY(PlayerAnimation[selectedAnimation].row);
            player.setMaxFrame(PlayerAnimation[selectedAnimation].frames);
            player.isIdle = false;
        }
    });

    document.addEventListener('keyup', function (event) {
        if (PlayerAnimation.hasOwnProperty(event.key)) {
            // If no button is pressed then idle
            const selectedAnimation = event.key;
            player.setFrameY(PlayerAnimation[selectedAnimation].row);
            player.setFrameX(PlayerAnimation[selectedAnimation].idleFrame.column)
            player.setMaxFrame(PlayerAnimation[selectedAnimation].idleFrame.frames);
            player.isIdle = true;
        }
    });

    // Player Object
    return player;
}

export default CharacterPlayer;
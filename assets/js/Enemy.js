// Creates animation for the enemy
const enemyAnimation = {
    scale: 0.15,
    width: 798,
    height: 735,
    idle: { row: 3, frames: 1, idleFrame: { column: 7, frames: 0 } }, // Standing idle animation
};

// Enemy class
export class Enemy extends Character {
    constructor(enemyCanvas, image, speedRatio) {
        super (enemyCanvas, image, speedRatio, enemyAnimation.width, enemyAnimation.height, enemyAnimation.scale);
    }
};

// Initializes the enemy 
export function initEnemy(canvasId, image, gameSpeed, speedRatio) {
    const enemy = new Enemy(canvasId, image, gameSpeed, speedRatio);
    enemy.setFrameY(enemyAnimation.idle.row);
    enemy.setFrameX(enemyAnimation.idle.idleFrame.column);
    enemy.setMaxFrame(enemyAnimation.idle.idleFrame.frames);
    enemy.setX(100); // Set an initial X position for the enemy
    enemy.setY(200); // Set an initial Y position for the enemy
    return enemy;
}

const enemy = initEnemy(canvasId, enemyImage, gameSpeed, speedRatio);
// Add the enemy to the game, and update/render it within your game loop.
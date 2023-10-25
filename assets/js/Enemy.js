import Character from './Character.js';

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
        };

    //update the enemy every repeat of the game loop
        update() {
            this.x = this.x + 10;
        };
};

// Initializes the enemy 
export function initEnemy(_canvasId, image, gameSpeed, speedRatio, domain, domainOffset) {
    var enemy = new Enemy(_canvasId, image, gameSpeed, speedRatio, domain, domainOffset);
        enemy.setFrameY(enemyAnimation.idle.row);
        enemy.setFrameX(enemyAnimation.idle.idleFrame.column);
        enemy.setMaxFrame(enemyAnimation.idle.idleFrame.frames);
        enemy.setX(100); // Set an initial X position for the enemy
        enemy.setY(200); // Set an initial Y position for the enemy
        enemy.setDomain(1000);
        enemy.setDomainOffset(0);
    return enemy;
};

export default Enemy;
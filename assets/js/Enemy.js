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
    constructor(enemyCanvas, image, speedRatio, domain, domainOffset) {
        super (enemyCanvas, image, speedRatio, enemyAnimation.width, enemyAnimation.height, enemyAnimation.scale);
        this.domain = domain; // Sets the distance that the enemy will walk before turning around
        this.domainOffset = domainOffset; // Sets the distance that the enemy will walk before turning around
        };

        setDomain(domain){
            this.domain = domain;
        };

        setDomainOffset(domainOffset){
            this.domainOffset = domainOffset;
        };

    //update the enemy every repeat of the game loop
        update() {
            if(this.domainOffset > 0 && this.domainOffset < 1000) {
                this.x = this.x + 2;
                this.domainOffset = this.domainOffset + 1;
            };
            if(this.domainOffset > 999 && this.domainOffset < 2000) {
                this.x = this.x - 2;
                this.domainOffset = this.domainOffset + 1;
            };
            if(this.domainOffset = 2000) {
                this.domainOffset = 0;
            };
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
        enemy.setDomain(1000); // Sets the distance that the enemy will walk before turning around
        enemy.setDomainOffset(0); // Leave at 0: the current x location of the enemy relative to its domain
    return enemy;
};

export default Enemy;
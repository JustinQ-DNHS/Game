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
        //Defines Dimension of Enemy Hitbox
        const hitbox = {
            width: 300,
            height: 300,
        };

        super (enemyCanvas, image, speedRatio, enemyAnimation.width, enemyAnimation.height, enemyAnimation.scale);
        
        //Hitbox is now a property of enemy
        this.hitbox = hitbox;

        this.domain = domain; // Sets the distance that the enemy will walk before turning around
        this.domainOffset = domainOffset; // Sets the distance that the enemy will walk before turning around
        };

        //Updates hitbox to match enemy position
        updateHitbox() {
            this.hitbox.x = this.x
            this.hitbox.y = this.y
            console.log('Hitbox:', this.hitbox); //logs the position of the hitbox
        }

        setDomain(domain){
            this.domain = domain;
        };

        setDomainOffset(domainOffset){
            this.domainOffset = domainOffset;
        };

    //update the enemy every repeat of the game loop
        update() {
            this.domainOffset = this.domainOffset + 1; // "domainOffset" essentially works as a timer that counts up every second.
            if(this.domainOffset > -1 && this.domainOffset < this.domain) { // move right until the timer equals "domain"
                this.x = this.x + 2; // move two spaces to the right
            };
            if(this.domainOffset > this.domain && this.domainOffset < this.domain * 2) {
                this.x = this.x - 2; //move two spaces to the left
            };
            if(this.domainOffset === this.domain * 2) {
                this.domainOffset = 0; // reset the counter back to 0
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
        enemy.setY(512); // Set an initial Y position for the enemy
        enemy.setDomain(100); // Sets the distance that the enemy will walk before turning around
        enemy.setDomainOffset(0); // Leave at 0: the current x location of the enemy relative to its domain
    return enemy;
};

export default Enemy;
import GameObject from './GameObject.js';

export class Background extends GameObject {
    constructor(canvas, image, speedRatio) {
        super(canvas, image, speedRatio);
    }
    update() {
        this.x = (this.x - this.speed) % this.width;
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y);
        this.ctx.drawImage(this.image, this.x + this.width, this.y);
    }
}

export function initBackground(canvas, image, speedRatio) {
    // Build game object
    var background = new Background(canvas, image, speedRatio);

    // Prepare Window extents related to viewport
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    // Calculate the top position to place the image in the middle
    const topPosition = (maxHeight - background.height) / 2;

    // Adjust display size to show half the width
    const ADJUST = 1.8;

    // Calculate the new canvas width
    const canvasWidth = maxWidth * ADJUST;
    const canvasHeight = canvasWidth / background.aspect_ratio; // Maintain the aspect ratio

    // Calculate the new canvas left position to center it
    const canvasLeft = (maxWidth - canvasWidth) / 2;

    // Set dimensions for the background canvas
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Set Style properties for the background canvas
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    canvas.style.position = 'absolute';
    canvas.style.left = `${canvasLeft}px`;
    canvas.style.top = `${topPosition}px`; // Set the top position

    return background;
}


export default Background;
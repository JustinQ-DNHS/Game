---
layout: post
title: Background Scrolling
toc: true
comments: false
type: tangibles
courses: { compsci: {week: 2} }
---

<style>
        /* style for the canvas */
        #canvas {
            margin: 0;
            border: 2px solid white;
        }
</style>

<!-- Prepare canvas -->
<canvas id="canvas"></canvas>

<script>
// Prepare Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// Prepare Window extents
const maxWidth = 1500 ;
const maxHeight = 750 ;

// Prepare Image
const backgroundImg = new Image();
backgroundImg.src = "/Game/images/Game/newBackground.jpg";

backgroundImg.onload = function () {
    const WIDTH = backgroundImg.width;
    const HEIGHT = backgroundImg.height;
    const ASPECT_RATIO = WIDTH / HEIGHT;

    // Set Dimensions to match the image width
    const canvasWidth = maxWidth;
    const canvasHeight = canvasWidth / ASPECT_RATIO;
    const canvasLeft = 0; // Start from the left edge
    const canvasTop = 0;

    // Set Style properties
    canvas.width = WIDTH / 2;
    canvas.height = HEIGHT;
    canvas.style.width = `${canvasWidth / 2}px`;
    canvas.style.height = `${canvasHeight}px`;

    canvas.style.position = 'relative';
    canvas.style.left = `${canvasLeft}px`;
    canvas.style.top = `${canvasTop}px`;
  
    var gameSpeed = 2;
    class Layer {
            constructor(image, speedRatio) {
            this.x = 0;
            this.y = 0;
            this.width = WIDTH;
            this.height = HEIGHT;
            this.image = image
            this.speedRatio = speedRatio
            this.speed = gameSpeed * this.speedRatio;
            this.frame = 0;
        }
        update() {
            this.x = (this.x - this.speed) % this.width;
        }
        draw() {
            ctx.drawImage(this.image, this.x, this.y);
            ctx.drawImage(this.image, this.x + this.width, this.y);
        }
    }

    var backgroundObj = new Layer(backgroundImg, 0.5)

    function background() {
        backgroundObj.update();
        backgroundObj.draw();
        requestAnimationFrame(background);
    }
    background();
};

</script>
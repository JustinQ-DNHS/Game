---
toc: false
comments: true
title: Movement Integration
description: Putting together animations to look fluid
layout: notebook
type: tangible
---
<body>
    <div>
        <!-- Within the base div is a canvas. An HTML canvas is used only for graphics. It allows the user to access some basic functions related to the image created on the canvas (including animation) -->
        <canvas id="spriteContainer" style="filter: invert(100%);">
            <img id="robotSprite" src="{{site.baseurl}}/images/robotSpritesheet.png">
        </canvas>
    </div>
</body>
<script>
    let state = "idle"
    // Runs this whenever the page is loaded
    window.addEventListener('load', function () {
        // Names the parameters of all canvases on the page, using the `get.ElementById`
        const canvas = document.getElementById('spriteContainer');
        const ctx = canvas.getContext('2d');
        const SPRITE_WIDTH = 798;
        const SPRITE_HEIGHT = 721;
        const SCALE_FACTOR = 1;
        const FRAME_RATE = 30;
        canvas.width = SPRITE_WIDTH * SCALE_FACTOR;
        canvas.height = SPRITE_HEIGHT * SCALE_FACTOR;
        class Robot {
            constructor() {
                // Describes parameters of sprite based off the Canvas parameters, also uing the `getElementById` to reference it.
                this.image = document.getElementById("robotSprite");
                this.width = 798;
                this.height = 721;
                this.x = 100;
                this.y = 0;
                this.scale = SCALE_FACTOR;
                this.maxFrame = 20;
                this.frameX = 0;
                this.frameY = 0;
            }
            draw(context) {
                context.drawImage(
                    this.image,
                    this.frameX * this.width,
                    this.frameY * this.height,
                    this.width,
                    this.height,
                    this.x,
                    this.y,
                    this.width * this.scale,
                    this.height * this.scale
                );
            }
            update() {
                if (this.frameX < this.maxFrame) {
                    this.frameX += 1;
                }
                else {
                    this.frameX = 0;
                }
                /*
                if (state = "runStartEnd") {
                    if (this.frameX < this.maxFrame) {
                        this.frameX += 1;
                    } 
                    else {
                        this.frameX = 0;
                    }
                }
                */
            }
            }
        }
        const robot = new Robot();
        addEventListener('keydown', ({ keyCode }) => {
            switch (keyCode) {
                case 65: // "A" Key
                    state = "runLeftStart"
                    break;
                case 83:
                    console.log('down');
                    break;
                case 68: // "D" Key
                    state = "runRightStart"
                    break;
                case 87:
                    if (player.position.y === 350) {
                        player.velocity.y -= 20;
                    }
                    break;
            }
        });
        addEventListener('keyup', ({ keyCode }) => {
            switch (keyCode) {
                    case 65:
                        state = "runLeftEnd"
                        break;
                   case 83:
                        console.log('down');
                    break;
                    case 68: // "D" Key
                        state = "runRightEnd"
                        break;
                    case 87:
                    case 40:
                        console.log('up');
                            if (player.position.y === 350) {
                                player.velocity.y = -20;
                            }
                        break;
            }
        });
        function animate() {
            setTimeout(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                robot.draw(ctx);
                robot.update();
                requestAnimationFrame(animate);
            }, 1000 / FRAME_RATE);
        }
        animate();
    });
</script>





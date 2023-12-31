---
toc: false
comments: true
title: Robot Animations
description: Putting together animations to look fluid
layout: notebook
type: tangible
---
<body>
    <div>
        <!-- Within the base div is a canvas. An HTML canvas is used only for graphics. It allows the user to access some basic functions related to the image created on the canvas (including animation) -->
        <canvas id="spriteContainer" style="filter: invert(100%);">
            <img id="robotSprite" src="{{site.baseurl}}/images/Game/robotSpritesheet.png">
        </canvas>
    </div>
</body>
<script>
    let state = "idleRight"
    // Runs this whenever the page is loaded
    window.addEventListener('load', function () {
        // Names the parameters of all canvases on the page, using the `get.ElementById`
        const canvas = document.getElementById('spriteContainer');
        const ctx = canvas.getContext('2d');
        const SPRITE_WIDTH = 798;
        const SPRITE_HEIGHT = 723;
        const SCALE_FACTOR = 1;
        const FRAME_RATE = 30;
        canvas.width = SPRITE_WIDTH * SCALE_FACTOR;
        canvas.height = SPRITE_HEIGHT * SCALE_FACTOR;
        class Robot {
            constructor() {
                // Describes parameters of sprite based off the Canvas parameters, also uing the `getElementById` to reference it.
                this.image = document.getElementById("robotSprite");
                this.width = 798;
                this.height = 723;
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
                // IDLE
                if (this.frameX < this.maxFrame) {
                    this.frameX += 1;
                } else {
                    currentState();
                    if (state === "runRightStart") {
                        state = "runRight"
                    }
                    if (state === "runRightEnd") {
                        state = "idleRight"
                    }
                    if (state === "jumpRight") {
                        state = "idleRight"
                    }
                    if (state === "runLeftStart") {
                        state = "runLeft"
                    }
                    if (state === "runLeftEnd") {
                        state = "idleLeft"
                    }
                    if (state === "jumpLeft") {
                    state = "idleLeft"
                    }
                }
            }
            }
        const robot = new Robot();
        // Add event listener to the parent container for event delegation
        addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 65: // "A" Key
            case 37:
                if (state !== "runLeft") {
                    state = "runLeftStart"
                }
                console.log('left down')
                break;
            case 83:
            case 38:
                console.log('down down');
                break;
            case 68:
            case 39:
                if (state !== "runRight") {
                    state = "runRightStart"
                }
                console.log('right down');
                break;
            case 87:
            case 40:
                if (state === "idleRight" || state === "runRight" || state === "runRightStart" || state === "runRightEnd") {
                    state = "jumpRight"
                }
                if (state === "idleLeft" || state === "runLeft" || state === "runLeftStart" || state === "runRightEnd") {
                    state = "jumpLeft"
                }
                console.log('up down');
                break;
            }
        });
        addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 65: // "A" Key
            case 37:
                if (state ==="runLeft" || state === "runLeftStart") {
                    state = "runLeftEnd"
                }
                console.log('left up')
                break;
            case 83:
            case 38:
                console.log('down up');
                break;
            case 68:
            case 39:
                if (state === "runRight" || state === "runRightStart") {
                    state = "runRightEnd"
                }
                console.log('right up');
                break;
        }
    });
    function currentState() {
        if (state === "idleRight") {
            robot.frameY = 0;
            robot.frameX = 0;
            robot.maxFrame = 20;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(1)";
        }
        if (state === "runRightStart") {
            robot.frameY = 6;
            robot.frameX = 0;
            robot.maxFrame = 10;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(1)";
        }
        if (state === "runRight") {
            robot.frameY = 4;
            robot.frameX = 0;
            robot.maxFrame = 18;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(1)";
        }
        if (state === "runRightEnd") {
            robot.frameY = 5;
            robot.frameX = 0;
            robot.maxFrame = 10;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(1)";
        }
        if (state === "jumpRight") {
            robot.frameY = 1;
            robot.frameX = 0;
            robot.maxFrame = 32;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(1)";
        }
        if (state === "idleLeft") {
            robot.frameY = 0;
            robot.frameX = 0;
            robot.maxFrame = 20;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(-1)";
        }
        if (state === "jumpLeft") {
            robot.frameY = 1;
            robot.frameX = 0;
            robot.maxFrame = 32;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(-1)";
        }
        if (state === "runLeftStart") {
            robot.frameY = 6;
            robot.frameX = 0;
            robot.maxFrame = 10;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(-1)";
        }
        if (state === "runLeft") {
            robot.frameY = 4;
            robot.frameX = 0;
            robot.maxFrame = 18;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(-1)";
        }
        if (state === "runLeftEnd") {
            robot.frameY = 5;
            robot.frameX = 0;
            robot.maxFrame = 10;
            robot.x = 100;
            document.getElementById("spriteContainer").style.transform = "scaleX(-1)";
        }
    }
    function animate() { //Creates a function called animate that is run after everything else is done
            // Creates a variable callled currentFrameRate which will equal the slider.value and make it into a whole number / integer
            // A timeout that runs a function, timeout creating the delay between each frame. Calculated by 1 second divided by currentFrameRate
            setTimeout(function () {
                // Clears the canvas by replacing everysingle pixel with a transparent pixel
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Runs the draw function within the horse class creating the horse
                robot.draw(ctx);
                // Runs the update function, moving the frame of the horse over 1
                robot.update();
                // Reruns the animate function at the same consistency as the browsers refresh rate
                requestAnimationFrame(animate);
            }, 1000 / FRAME_RATE);
        }
        // This is the animate function being run at the start of the page, otherwise it would not start.
        animate();
    });
</script>
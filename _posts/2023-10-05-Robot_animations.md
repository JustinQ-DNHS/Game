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
            <img id="robotSprite" src="{{site.baseurl}}/images/robotSpritesheet.png">
        </canvas>
        <!-- Radio type inputs for selecting only one at a time, and also switches selected animation -->
        <div id="controls">
            <input type="radio" name="animation" id="idle" checked>
            <label for="running">Idle</label>
            <!-- Invert Button -->
            <button class="button" onclick="invert()" style="margin-left:50px">Invert</button><br>
            <!-- End Invert Button -->
            <input type="radio" name="animation" id="run">
            <label for="run">Run</label><br>
            <input type="radio" name="animation" id="jump">
            <label for="jump">Jump</label><br>
            <input type="radio" name="animation" id="ko">
            <label for="ko">KO</label><br>
            <input type="radio" name="animation" id="punch">
            <label for="punch">Punch</label><br>
        </div>
    </div>
</body>
<script>
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
                } else {
                    this.frameX = 0;
                }
            }
        }
        const robot = new Robot();
        // Add event listener to the parent container for event delegation
        const controls = document.getElementById('controls');
        controls.addEventListener('click', function (event) {
            if (event.target.tagName === 'INPUT') {
                const selectedAnimation = event.target.id;
                switch (selectedAnimation) {
                    case 'idle':
                        robot.frameY = 0;
                        robot.frameX = 0;
                        robot.maxFrame = 20;
                        robot.x = 100;
                        break;
                    case 'run':
                        robot.frameY = 4;
                        robot.frameX = 0;
                        robot.maxFrame = 18;
                        robot.x = 100;
                        break;
                    case 'jump':
                        robot.frameY = 1;
                        robot.frameX = 0;
                        robot.maxFrame = 32;
                        robot.x = 100;
                        break;
                    case 'ko':
                        robot.frameY = 2;
                        robot.frameX = 0;
                        robot.maxFrame = 40;
                        robot.x = 100;
                        break;
                    case 'punch':
                        robot.frameY = 3;
                        robot.frameX = 0;
                        robot.maxFrame = 9;
                        robot.x = 50;
                        break;
                    default:
                        break;
                }
            }
        });
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
<script>
    let inverted = false;
    function invert() {
        const canvas = document.getElementById("spriteContainer")
        if (inverted) {
            canvas.style.filter = "invert(100%)";
        }
        else {
            canvas.style.filter = "invert(0%)";
        }
        inverted = !inverted
    }
</script>







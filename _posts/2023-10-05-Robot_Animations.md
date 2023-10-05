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
        <canvas id="spriteContainer"> 
            <img id="horseSprite" src="{{site.baseurl}}/images/robotIdle.png">
        </canvas>
        <!-- Radio type inputs for selecting only one at a time, and also switches selected animation -->
        <div id="controls"> 
            <input type="radio" name="animation" id="running" checked>
            <label for="running">Running</label><br>
            <input type="radio" name="animation" id="stamping">
            <label for="stamping">Stamping</label><br>
            <input type="radio" name="animation" id="test">
            <label for="test">Test</label>
        </div>
    </div>
</body>

<script>
    // Runs this whenever the page is loaded
    window.addEventListener('load', function () {
        // Names the parameters of all canvases on the page, using the `get.ElementById`
        const canvas = document.getElementById('spriteContainer');
        const ctx = canvas.getContext('2d');
        const SPRITE_WIDTH = 200;
        const SPRITE_HEIGHT = 200;
        const SCALE_FACTOR = 2;
        canvas.width = SPRITE_WIDTH * SCALE_FACTOR;
        canvas.height = SPRITE_HEIGHT * SCALE_FACTOR;

        class Horse {
            constructor() {
                // Describes parameters of sprite based off the Canvas parameters, also uing the `getElementById` to reference it.
                this.image = document.getElementById("horseSprite");
                this.width = 300;
                this.height = 600;
                this.x = 0;
                this.y = 0;
                this.scale = SCALE_FACTOR;
                this.maxFrame = 10;
                this.frameX = 0.5;
                this.frameY = 0.5;
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
                    this.frameX = this.frameX + 2;
                } else {
                    this.frameX = 0;
                }
            }
        }

        const horse = new Horse();
        // Add event listener to the parent container for event delegation
        const controls = document.getElementById('controls');
        controls.addEventListener('click', function (event) {
            if (event.target.tagName === 'INPUT') {
                const selectedAnimation = event.target.id;
                switch (selectedAnimation) {
                    case 'running':
                        horse.frameY = 0;
                        horse.frameX = 0;
                        horse.maxFrame = 5;
                        break;
                    case 'stamping':
                        horse.frameY = 1;
                        hose.frameX = 0;
                        horse.maxFrame = 5;
                        break;
                    case 'test':
                        horse.frameY = 2;
                        horse.frameX = 0;
                        horse.maxFrame = 2;
                        break;
                    default:
                        break;
                }
            }
        });

        function animate() { //Creates a function called animate that is run after everything else is done
            // Creates a variable callled currentFrameRate which will equal the slider.value and make it into a whole number / integer
            const currentFrameRate = parseInt(slider.value, 10);
            // A timeout that runs a function, timeout creating the delay between each frame. Calculated by 1 second divided by currentFrameRate
            setTimeout(function () {
                // Clears the canvas by replacing everysingle pixel with a transparent pixel
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Runs the draw function within the horse class creating the horse
                horse.draw(ctx);
                // Runs the update function, moving the frame of the horse over 1
                horse.update();
                // Reruns the animate function at the same consistency as the browsers refresh rate
                requestAnimationFrame(animate);
            }, 1000 / currentFrameRate);
        }
        // This is the animate function being run at the start of the page, otherwise it would not start.
        animate();
    });
    // Creates a variable called slider that matches the current value of objects with the id of `frameSlide` the only one of which being `<input type="range">` object
    var slider = document.getElementById("frameSlide"); 
    // Creates a variable called output that matches current value of the frameRate variable 
    var output = document.getElementById("frameRate");
    // Sets the inner HTML or content of the output variable to equal the slider's current value
    output.innerHTML = slider.value;
    // Creates a if statement that runs a function whenever the slider is interacted with
    slider.oninput = function() {
        //Changes the innerHTML of the output to the current value of the slider
        output.innerHTML = this.value;
    }
</script>
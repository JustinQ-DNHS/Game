<!-- Style of the Canvas -->
<style>
    .game-container {
        position: relative;
        left: -520px;
        width: 1920px;
        height: 552px;
    }
    #canvas {
        margin: 0;
        border: 4px solid black;
        filter: invert(0%);
    }
         .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("{{site.baseurl}}/images/background.jpg"); 
        background-size: 1380px 552px; 
        animation: slide 10s linear infinite; 
    }

    @keyframes slide {
        0% {
            background-position: 100% 0; 
        }
        100% {
            background-position: 0% 0; 
        }
    }   
</style>

<div class="game-container">
    <div class="background"></div>
    <canvas id="canvas"></canvas>

</div>

<script>
    // Create empty canvas
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');
    // Set the canvas dimensions
    canvas.width = 1920;
    canvas.height = 552;
    // Define gravity value
    let gravity = 1.5;
    // Define the Player class
    class Player {
        constructor() {
            // Initial position and velocity of the player
            this.position = {
                x: 325,
                y: 200
            };
            this.velocity = {
                x: 0,
                y: 0
            };
            // Dimensions of the player
            this.width = 30;
            this.height = 30;
        }
        // Method to draw the player on the canvas
        draw() {
            c.fillStyle = 'yellow';
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        // Method to update the players position and velocity
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            if (this.position.y + this.height + this.velocity.y <= canvas.height)
                this.velocity.y += gravity;
            else
                this.velocity.y = 0;
        }
    }
    // Create a player object
    player = new Player();
    // Define keyboard keys and their states
    let keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    };
    // Animation function to continuously update and render the canvas
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        player.update();
        if (keys.right.pressed) {
            player.velocity.x = 10;
        } else if (keys.left.pressed) {
            player.velocity.x = -10;
        } else {
            player.velocity.x = 0;
        }
        if (player.position.x + player.width > 1920) {
            player.position.x = 0;
        } else if (player.position.x + player.width < -30) {
            player.position.x = 1970;
        } else if (player.position.y + player.width < 0) {
            player.velocity.y += 5;
        }
    }
    animate();
    // Event listener for keydown events
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                console.log('left');
                keys.left.pressed = true;
                break;
            case 83:
                console.log('down');
                break;
            case 68:
                console.log('right');
                keys.right.pressed = true;
                break;
            case 87:
                console.log('up');
                if (player.velocity.y === 0) {
                    player.velocity.y -= 20;
                }
                break;
            case 38:
                console.log('upside down');
                player.y = 0;
                break;
        }
    });
    // Event listener for keyup events
    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                console.log('left');
                keys.left.pressed = false;
                break;
            case 83:
                console.log('down');
                break;
            case 68:
                console.log('right');
                keys.right.pressed = false;
                break;
            case 87:
                console.log('up');
                if (player.velocity.y === 0) {
                    player.velocity.y = -20;
                }
                break;
        }
    });
</script>

<button class="gravity" onclick="switchGravity()">Change Gravity</button>
<script>
    function switchGravity() {
        if (gravity === 1.5) {
            gravity = 0.75;
        } else if (gravity === 0.75) {
            gravity = 1.5;
        }
    }
</script>
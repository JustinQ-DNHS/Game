<!-- Style of the Canvas -->
<style>
    #canvas {
        margin: 0;
        border: 4px solid black;
        background-size: cover;
    }
</style>

<div style="text-align:center">
    <button class="button" onclick="switchText()">Settings</button>
</div>
<br>
<div id="setting" style="text-align:center">
    <canvas id="canvas"></canvas>
    <p style="display: none;">Choose your fighter!</p>
</div>

<script>
    let x = 0;
    // Create empty canvas
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');
    // Set the canvas dimensions
    canvas.width = 800;
    canvas.height = 400;
    
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
        if (player.position.x + player.width > 830) {
            player.position.x = 0;
        } else if (player.position.x + player.width < -30) {
            player.position.x = 800;
        } else if (player.position.y + player.width < 0) {
            player.velocity.y += 5;
        }
    }
    animate();

    //PLAYER CONTROLS
    // Event listener for keydown events
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
            case 37:
                console.log('left');
                keys.left.pressed = true;
                break;
            case 83:
            case 40:
                console.log('down');
                break;
            case 68:
            case 39:
                console.log('right');
                keys.right.pressed = true;
                break;
            case 87:
            case 38:
                console.log('up');
                if (player.velocity.y === 0) {
                    player.velocity.y -= 20;
                }
                break;
        }
    });
    // Event listener for keyup events
    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
            case 37:
                console.log('left');
                keys.left.pressed = false;
                break;
            case 83:
            case 40:
                console.log('down');
                break;
            case 68:
            case 39:
                console.log('right');
                keys.right.pressed = false;
                break;
            case 87:
            case 38:
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
// Setting Swap
let canvasVisible = true;

function switchText() {
        const canvas = document.getElementById("canvas");
        const paragraph = document.querySelector("#setting p");

        if (canvasVisible) {
            canvas.style.display = "none";
            paragraph.style.display = "block";
        } else {
            canvas.style.display = "block";
            paragraph.style.display = "none";
        }

        canvasVisible = !canvasVisible;
    }
</script>
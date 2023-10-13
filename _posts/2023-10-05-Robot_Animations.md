<!-- Style of the Canvas -->
<style>
    #canvas {
        margin: 0;
        border: 4px solid black;
        background-image: url("{{site.baseurl}}/images/background.jpg");
        background-size: cover;
    }
</style>


<canvas id='canvas'></canvas>


<script>
    let x = 0;
    let onPlatform = 0;
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
        // Method to update the player's position and velocity
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;


            // Check for collisions with the platform
            if (this.position.y + this.height >= platform.position.y) {
                this.position.y = platform.position.y - this.height;
                this.velocity.y = 0; // Set vertical velocity to 0 when on the platform
                onPlatform = 1
            } else {
                onPlatform = 0
            }


            // Apply gravity only if not on the platform
            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
                this.velocity.y += gravity;
            } else {
                this.velocity.y = 0;
            }
        }
    }


    class Platform {
        constructor(x, y, width, height) {
            this.position = {
                x: x,
                y: y
            };
            this.width = width;
            this.height = height;
        }


        draw() {
            c.fillStyle = 'white';
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }


    // Create a player and platform object
    const player = new Player();
    const platform = new Platform(0, 380, 800, 20); // Adjust the position and dimensions as needed


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
        platform.draw();


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
        } else if (player.position.y + player.width < -100) {
            player.velocity.y += 5;
        }
    }
    animate();


    // PLAYER CONTROLS
    // Event listener for keydown events
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 49:
                player.position.y = 100;
                console.log("speed");
                break;
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
                if (player.position.y === 350) {
                    player.velocity.y -= 20;
                }
                break;
        }
    });


    // Event listener for keyup events
    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 49:
                player.position.y = 0;
                console.log("speed");
                break;
            case 65:
            case 37:
                console.log('left');
                keys.left.pressed = false;
                break;
            case 83:
            case 38:
                console.log('down');
                break;
            case 68:
            case 39:
                console.log('right');
                keys.right.pressed = false;
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


    // Function to switch gravity
    function switchGravity() {
        if (gravity === 1.5) {
            gravity = 0.75;
        } else if (gravity === 0.75) {
            gravity = 1.5;
        }
    }
</script>


<button class="gravity" onclick="switchGravity()">Change Gravity</button>
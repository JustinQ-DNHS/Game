---
Title: Background Scrolling
Description: Moon background test.
Comments: true
layout: default
---

<html>
    <style>
        /* style for the canvas */
        #canvas {
            margin: 0;
            border: 2px solid white;
        }
    </style>
    <canvas id="canvas"></canvas>
</html>
<script>
    //create an empty canvas
    let canvas document.getElementById ("canvas");
    let c = canvas.getContext ("2d")
    // set canvas dimensions
    canvas.width = 75%;
    canvas.height = 75%;
    //Generic Object class for bg images
    class genericObject {
        constructor ({ x, y, image })
        this.position = {
            x,
            y
        };
        this.image = image;
        this.x = 75%;
        this.y = 75%;
    }
    //method to draw object on canvas
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
    //load image sources
    let imageBackground = new Image();
    //add bg images
    imageBackground.src = '{site.baseurl/images/Background.jpg}';
    //create array for generic objects then add the bg
    let genericObjects = [
        new genericObject({
            x:0, y:0, image: imageBackground 
        }),
    ]
</script>
---
Title: Background Scrolling
Description: Moon background test.
Comments: true
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
</script>
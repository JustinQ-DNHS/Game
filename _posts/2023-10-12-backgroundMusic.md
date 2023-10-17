<style>
    div {
        text-align: center;
    }
</style>

<div>
    <a href="https://www.w3schools.com" id="link">Click Me!</a>
    <div>
        <button class="button" onclick="change()">Swap Links</button>
    </div>
</div>
<div>
    <iframe width="996" height="560" src="https://www.youtube.com/embed/gZjdAWgjLx8" id="video"></iframe>
    <div>
        <button class="button1" onclick="changeLink()">Swap Song</button>
    </div>
</div>

<script>
    // Code for link swap
    let swap = true;
    function change() {
        const link = document.getElementById("link")
        if (swap) {
            link.href = "https://github.com/JustinQ-DNHS/Game";
            console.log(swap)
        }
        else {
            link.href = "https://www.w3schools.com";
            console.log(swap)
        }
        swap = !swap
    }
    // Code for video swapper
    let swapLink = false;
    function changeLink() {
        const videoLink = document.getElementById("video")
        if (swapLink) {
            videoLink.src = "https://www.youtube.com/embed/gZjdAWgjLx8"
            console.log(swapLink)
        }
        else {
            videoLink.src = "https://www.youtube.com/embed/aBH_HH88qmY"
            console.log(swapLink)
        }

        swapLink = !swapLink;
    }
</script>
<style>
    div {
        text-align: center;
    }
</style>

<div>
    <iframe width="996" height="560" src="https://www.youtube.com/embed/gZjdAWgjLx8" id="video"></iframe>
    <div>
        <input type="text" id="URLId" placeholder="Last 11 digits of URL">
        <button class="button1" onclick="changeLink()">Swap Song</button>
    </div>
</div>

<script>
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
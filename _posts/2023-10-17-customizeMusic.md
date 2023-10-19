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
    function changeLink() {
        const videoLink = document.getElementById("video")
        let inputText = document.getElementById("URLId").value;
            videoLink.src = "https://www.youtube.com/embed/" + inputText
            console.log("Complete")
            console.log(videoLink.src)
    }
</script>
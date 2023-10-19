<style>
    div {
        text-align: center;
    }
</style>

<div>
    <iframe width="996" height="560" src="https://www.youtube.com/embed/gZjdAWgjLx8?autoplay=1" id="video"></iframe>
    <button onclick="input()">Show Input</button>
    <div id="inputVisible" style="display:none">
        <input type="text" id="URLId" placeholder="Last 11 digits of URL">
        <button class="button1" onclick="changeLink()">Swap Song</button>
    </div>
</div>

<script>
    // Code for video swapper
    function changeLink() {
        const videoLink = document.getElementById("video")
        let inputText = document.getElementById("URLId").value;
        if (inputText.length >= 11) {
            inputText = inputText.substring(inputText.length -11);
            }
            videoLink.src = "https://www.youtube.com/embed/" + inputText + "?autoplay=1"
            console.log("Complete")
            console.log(videoLink.src)
    }
    // Input bar revealer
    let inputBar = true
    function input() {
        const inputVisible = document.getElementById("inputVisible")
        if (inputBar) {
            inputVisible.style.display = "block"
        }
        else {
            inputVisible.style.display = "none"
        }

        inputBar = !inputBar
    }
</script>
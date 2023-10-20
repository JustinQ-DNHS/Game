<style>
    div {
        text-align: center;
    }
</style>

<div>
    <div id="player"></div>
    <button onclick="input()">Show Input</button>
    <button onclick="mute()">Mute</button>
    <div id="inputVisible" style="display:none">
        <input type="text" id="URLId" placeholder="Last 11 digits of URL">
        <button class="button1" onclick="changeLink()">Swap Song</button>
    </div>
</div>

<script>
    // Code for video swapper
    let player;
    function changeLink() {
        const inputText = document.getElementById("URLId").value;
        if (inputText.length >= 11) {
            const videoId = inputText.substring(inputText.length - 11);
            player.loadVideoById(videoId);
        }
    }

    // Input bar revealer
    let inputBar = true;
    function input() {
        const inputVisible = document.getElementById("inputVisible");
        if (inputBar) {
            inputVisible.style.display = "block";
        } else {
            inputVisible.style.display = "none";
        }
        inputBar = !inputBar;
    }
    
    // Mute button
    function mute() {
        if (plasyer.isMuted()) {
            player.unMute();
        } else {
            player.Mute();
        }
        isMuted = !isMuted;
    }

    // Load the YouTube IFrame API asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '560',
            width: '996',
            videoId: 'gZjdAWgjLx8',
            playerVars: {
                'autoplay': 1, // Autoplay the video
            },
        });
    }
</script>

<!--Centers the Button -->
<style>
    div {
        text-align: center;
    }
</style>

<!--HTML section for Buttons-->
<div>
    <!--Loads Youtube Video-->
    <div id="player"></div>
    <!--HTML for Buttons-->
    <button onclick="input()" id="swapInput">Show Input</button>
    <button onclick="mute()" id="muteButton">Mute</button>
    <button onclick="defaultMusic()" id="defaultButton">Switch to Default 2</button>
    <div id="inputVisible" style="display:none">
        <input type="text" id="URLId" placeholder="Insert URL Here">
        <button onclick="changeLink()">Swap Song</button>
    </div>
    <!--Warning Message-->
    <p> Please note that reloading will break the music due to a bug in the YouTube API, if you are forced to reload, open the link from another page</p>
    <p>Please be aware some videos do not work with the background music due to various reasons</p>
</div>

<script>
    // Code for default button
    function defaultMusic() {
        const videoId = player.getVideoData().video_id;
        if (videoId === "xZhrZMervZU") {
            const videoId = "VGNcGl1zVjQ";
            player.loadVideoById(videoId);
            document.getElementById("defaultButton").innerHTML = "Switch to Default 1"
            console.log(videoId)
        }
        if (videoId !== "xZhrZMervZU") {
            const videoId = "xZhrZMervZU";
            player.loadVideoById(videoId);
            document.getElementById("defaultButton").innerHTML = "Switch to Default 2"
            console.log(videoId)
        }
    }
    // Code for video swapper
    let player;
    function changeLink() {
        const inputText = document.getElementById("URLId").value;
        if (inputText.length >= 11) {
            const videoId = inputText.substring(inputText.length - 11);
            player.loadVideoById(videoId);
            document.getElementById("defaultButton").innerHTML = "Switch to Default 1"
        }
    }

    // Input bar revealer
    let inputBar = true;
    function input() {
        const inputVisible = document.getElementById("inputVisible");
        if (inputBar) {
            inputVisible.style.display = "block";
            document.getElementById("swapInput").innerHTML = "Hide Input"
        } else {
            inputVisible.style.display = "none";
            document.getElementById("swapInput").innerHTML = "Show Input"
        }
        inputBar = !inputBar;
    }
    
    // Mute Button
    function mute() {
        if (player.isMuted()) {
            player.unMute();
            document.getElementById("muteButton").innerHTML = "Mute"
        } else {
            player.mute();
            document.getElementById("muteButton").innerHTML = "Unmute"
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

    //Assigns x a random variable
    let x = Math.random();

    //If Audio is less than 0.5 assign the first link, if not, assign the second link
    let audio = (x < 0.5) ? 'xZhrZMervZU' : 'VGNcGl1zVjQ';

    //Properties for Youtube Player
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: audio, // Randomized video ID
        playerVars: {
            'autoplay': 1, //Automatically Plays Video
            'loop': 1 //Loops Audio
        },
    });
}

    //Further Documentation on Youtube API
    //https://developers.google.com/youtube/iframe_api_reference#Playback_controls
    //https://developers.google.com/youtube/player_parameters
</script>

<div>
    <a href="https://www.w3schools.com" id="link">Click Me!</a>
</div>
<div>
    <button class="button" onclick="change()" style="margin-left:50px">SwapSongs</button>
</div>
<script>
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
</script>
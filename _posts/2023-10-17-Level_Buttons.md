<button class="level-button" data-level="1">Level 1</button>

<script>
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("level-button")) {
    var level = event.target.getAttribute("data-level");
    alert("Level starting " + level); 
  }
});
</script>


<button class="level-button" data-level="2">Level 2</button>


<button class="level-button" data-level="3">Level 3</button>


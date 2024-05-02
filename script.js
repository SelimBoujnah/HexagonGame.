document.addEventListener("DOMContentLoaded", function() {
  const hexGrid = document.getElementById("hexGrid");
  const totalHexagons = 100; // 10x10 grid

  // Generate hexagons
  for (let i = 0; i < totalHexagons; i++) {
      const hexagon = document.createElement("div");
      hexagon.classList.add("hexagon");
      hexGrid.appendChild(hexagon);

      // Add click event listener to toggle color
      hexagon.addEventListener("click", function() {
          hexagon.classList.toggle("clicked");
      });
  }
});

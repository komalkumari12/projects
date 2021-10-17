let leftLines = document.querySelectorAll('#left-wing .line');
let rightLines = document.querySelectorAll('#right-wing .line');

function animate() {
  for (let i = 0; i < leftLines.length; i += 1) {
    let leftLine = leftLines[i];
    let rightLine = rightLines[i];
    addAnimation(leftLine, i);
    addAnimation(rightLine, i);
  };
};

function addAnimation(line, i) {
  setInterval(() => {
    line.style.animation = "flip 4s infinite forwards"
  }, 100 * i);
}

animate();
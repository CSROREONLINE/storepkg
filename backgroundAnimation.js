let pos = 0;

function frame() {
  pos++;
  backgroundSolid.style.right = pos + "px"; // Update position
  if (pos < 350) {
    requestAnimationFrame(frame); // Call next frame
  }
}
requestAnimationFrame(frame);
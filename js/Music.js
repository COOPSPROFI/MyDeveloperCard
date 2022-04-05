let paused = true;
let sound = new Audio('music/benedixhion-toxin.mp3');
function play() {
  if (paused) {
    sound.play();
    paused = false;
  } else {
    sound.pause();
    paused = true;
  }
}
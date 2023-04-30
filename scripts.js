document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const playButton = document.getElementById("play-button");

  playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.innerHTML = "&#10074;&#10074;";
    } else {
      audioPlayer.pause();
      playButton.innerHTML = "&#9658;";
    }
  });
});
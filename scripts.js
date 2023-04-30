document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const playButton = document.getElementById("play-button");
  const playIcon = playButton.querySelector(".play-icon");
  const pauseIcon = playButton.querySelector(".pause-icon");

  playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playIcon.style.display = "none";
      pauseIcon.style.display = "block";
    } else {
      audioPlayer.pause();
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
    }
  });
});

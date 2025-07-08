const totalVideo = document.querySelector(".total-video");
const totalDuration = document.querySelector(".total-duration");
const videoList = Array.from(document.querySelectorAll("[data-duration]"));

const filteredVideo = videoList
  .filter((video) => {
    // Selecting only video with JavaScript Playlist title as a new array
    return video.textContent.includes("JavaScript Playlist");
  })
  .map((video) => {
    // Selecting only the duration from each video of JavaScript Playlist title
    return video.dataset.duration;
  })
  .map((video) => {
    // Converting string duration into integer, and converting them to seconds
    const parts = video.split(":").map((part) => {
      return parseInt(part);
    });
    return parts[0] * 60 + parts[1];
  });

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
  })
  .reduce((accumulator, currValue) => {
    // Sum the durations
    return accumulator + currValue;
  });

// function secondsConverter(totalSeconds) {
//   let hrs = 0,
//     mnts = 0,
//     secs = 0;

//   while (totalSeconds >= 3600) {
//     totalSeconds -= 3600;
//     hrs++;
//   }
//   while (totalSeconds >= 60) {
//     totalSeconds -= 60;
//     mnts++;
//   }
//   secs = totalSeconds;
//   return `Total Duration: ${hrs} hour, ${mnts} minutes, ${secs} seconds`;
// }

// Converting duration
const hour = Math.floor(filteredVideo / 3600);
const minutes = Math.floor((filteredVideo % 3600) / 60);
const seconds = filteredVideo % 60;

// Total Duration Span
const sTotalDuration = document.querySelector(".total-duration");
sTotalDuration.textContent = `${hour} hour, ${minutes} minutes, ${seconds} seconds.`;

// Total Video Span
const sTotalVideo = document.querySelector(".total-video");
const totalVideo = videoList.filter((video) => {
  return video.textContent.includes("JavaScript Playlist");
}).length;
sTotalVideo.textContent = `${totalVideo} videos.`;

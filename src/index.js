import Plyr from "plyr";
const player = new Plyr("#videoplayer", {
  debug: true,
  title: "View From A Blue Moon",
  iconUrl: "dist/demo.svg",
  keyboard: {
    global: true,
  },
  tooltips: {
    controls: true,
  },
  captions: {
    active: true,
  },
  vimeo: {
    // Prevent Vimeo blocking plyr.io demo site
    referrerPolicy: "no-referrer",
  },
  mediaMetadata: {
    title: "View From A Blue Moon",
    album: "Sports",
    artist: "Brainfarm",
    artwork: [
      {
        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
        type: "image/jpeg",
      },
    ],
  },
  markers: {
    enabled: true,
    points: [
      {
        time: 40,
        label: "first marker",
      },
      {
        time: 80,
        label: "second marker",
      },
      {
        time: 120,
        label: "<strong>third</strong> marker",
      },
    ],
  },
});

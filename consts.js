"use strict";

const consts = {
  skyway: {
    mode: [
      { label: "P2P", value: "p2p" },
      { label: "Mesh", value: "mesh" },
      { label: "SFU", value: "sfu" },
    ]
  },
  bandwidth: [
    { label: "5Mbps", value: 5000 },
    { label: "3Mbps", value: 3000 },
    { label: "1Mbps", value: 1000 },
    { label: "500kbps", value: 500 },
  ],
  video: {
    codec: [
      { label: "VP8", value: "VP8" },
      { label: "VP9", value: "VP9" },
      { label: "H264", value: "H264" },
    ],
    size: [
      { label: "4096 x 2160", value: { width: 4096, height: 2160 } },
      { label: "3840 x 2160", value: { width: 3840, height: 2160 } },
      { label: "1920 x 1080", value: { width: 1920, height: 1080 } },
      { label: "1280 x 960", value: { width: 1280, height: 960 } },
      { label: "1280 x 720", value: { width: 1280, height: 720 } },
      // { label: " 960 x 720",  value: { width:  960, height:  720 } },
      // { label: " 800 x 600",  value: { width:  800, height:  600 } },
      { label: " 640 x 480", value: { width: 640, height: 480 } },
      // { label: " 320 x 240",  value: { width:  320, height:  240 } },
    ],
    fps: [
      { label: "60 fps", value: 60 },
      { label: "30 fps", value: 30 },
      { label: "24 fps", value: 24 },
      { label: "10 fps", value: 10 },
      { label: " 5 fps", value: 5 },
      { label: " 1 fps", value: 1 },
    ],
  },
  renderer: [
    { label: "Cover", value: "cover" },
    { label: "Normal", value: "normal" },
  ],
  layout: [
    { label: "Auto", value: "auto" },
    { label: "PinP", value: "pinp" },
    { label: "Grid", value: "grid" },
  ]
}

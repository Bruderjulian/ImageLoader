import { Loader } from "./js/image-loader.js";

import data from "./assets.json" assert { type: "json" };

window.onload = function() {
    var assets = Loader.handleImages(data);
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    var img = assets[0];
    var img2 = assets[1];
    ctx.drawImage(img, 32, 32, 128, 96);
    ctx.drawImage(img2, 96, 96, 128, 96);
};
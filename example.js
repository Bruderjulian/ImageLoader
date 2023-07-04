import { Loader } from "./image-loader.js";

import data from "./assets.json" assert { type: "json" };
//Import ImageLoader and JSON

window.onload = function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    //Get Canvas and Context

    var assets = Loader.handleImages(data); 
    //Load the Images

    ctx.drawImage(assets[0], 32, 32);
    ctx.drawImage(assets[1], 96, 96);
    //Draw them on a Canvas
};

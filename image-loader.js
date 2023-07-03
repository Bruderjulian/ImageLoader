export class Loader {
  static images = {};

  static defaultImage() {
    return {
      src: "https://via.placeholder.com/100x100",
      width: 100,
      height: 100,
    };
  }

  static loadImage(src, width, height, name) {
    try {
      let ImgWidth =
        width !== undefined && width !== null
          ? this.defaultImage().width
          : width;
      let ImgHeight =
        height !== undefined && height !== null
          ? this.defaultImage().height
          : height;
      let ImgSrc =
        src !== undefined && src !== "" ? src : this.defaultImage().src;

      var img = new Image(ImgWidth, ImgHeight);
      img.src = ImgSrc;

      img.onerror = function () {
        console.error(
          "Could not load image: " +
            ImgSrc +
            " with w: " +
            ImgWidth +
            " with h: " +
            ImgHeight
        );
      };

      if (name !== undefined && name !== "") {
        this.images[name.toString()] = img;
      }
      return img;
    } catch (err) {
      console.error(
        "Could not load image: " +
          src +
          " with w: " +
          width +
          " with h: " +
          height
      );
    }
  }

  static getImage(name) {
    if (name !== undefined && name !== "" && this.images !== undefined) {
      return this.images[name.toString()];
    }
  }

  static handleImages(assets) {
    var out = [];
    if (assets !== undefined && assets !== []) {
      for (var i = 0; i < assets.length; i++) {
        const elem = assets[i];
        out.push(Loader.loadImage(elem.path, elem.width, elem.height, elem.name));
      }
    }
    return out;
  }
}

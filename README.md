
# ImageLoader

An Image Loader for Javascript

## Contents

- [Description](#description)
- [Setup](#setup)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)


## Description

It can load multiple Images from a provided file and loads the metadata from a JSON file.

## Setup

it'll be included with a Html script tag.

```html
<script src="js/image-loader.js"></script>
```

but it also needs a Html <img> Tag with the path to work properly! (I hope, I fix or find a workaround for that!)

```html
<img id="myImage" src="./myImage.png" hidden>
```

## Usage

### JSON
It'll fetch the metadata from a JSON file which can be included like followed:
```javascript
import * as data from "./metadata.json" assert { type: "json" };
```
or

```javascript
import data from "./metadata.json" assert { type: "json" };
```
You can name the Variable and file name to what you want. But you can't remove the `assert { type: "json" }` because otherwise it doesn't import the json!

The JSON file must contain an Array with Objects for each Image! In the Object must be a path. Optional can be the name, width and height defined. If width and height are specified, these are used. If not the `defaults` are used. For name see `Cache`!

### Image Loading
You can load a single or multiple Images. 

#### loadImage()
This Function loads the Image and accepts these arguments:

- Name (Given Name)
- Src (path to the file)
- Width
- Height
- Cache (Default is false. See [Cache](#cache))

#### handleImages()
This Function repeats the `loadImage()` Function for all Images in the `imported JSON`

#### defaultImage()
It'll return the default/alternative Values.

### Cache
When Cache is true, the Image will be chached and can get accessed through the `getImage()` Function which needs the name as an argument. Cache is by default set to false and in case of undefinded.


## Examples

### Javascript
```javascript
import { ImageLoader } from "./js/image-loader.js";

import data from "./ImageMetadata.json" assert { type: "json" };
//Import ImageLoader and JSON

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//Get Canvas and Context

var assets = ImageLoader.handleImages(data); 
//Load the Images

ctx.drawImage(assets[0], 32, 32);
ctx.drawImage(assets[1], 96, 96);
//Draw them on a Canvas
```
### JSON
```json
"assets": [
      {
        "name": "btnA",
        "path": "./assets/ButtonA.png",
        "width": 128,
        "height": 96,
        "cache": false
      },
      {
        "name": "btnB",
        "path": "./assets/ButtonB.png",
        "width": 128,
        "height": 96,
        "cache": false
      }
    ]
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

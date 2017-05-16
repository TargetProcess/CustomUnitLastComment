
# Custom Unit Last Comment

Display last comment.

## Usage

Clone repository. 

Run `npm install`.

Edit `make-webpack-config.js` to make suitable for your needs. Edit source code in `src` folder.

Run `npm run build` or `npm run build-production`.

You can install [targetprocess-mashup-uploader](https://github.com/TargetProcess/targetprocess-mashup-uploader) to immediately upload your build to Mashup Manager

```
targetprocess-mashup-uploader --host yourhost --login admin --password admin --name MyMashup --watch dist/index.js
```

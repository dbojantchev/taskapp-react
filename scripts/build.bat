babel --presets react,es2015 web/js/src -d web/js/build

browserify web/js/build/App.js -o ./web/js/build/bundle.js

commonjs --src web/js/build/components/App.js --dest ./foo --client


type web\css\components\* web\css\* > ./web/css/bundle.css



babel --presets react,es2015 web/js/src -d web/js/build

browserify web/js/build/components/App.js -o ./web/js/bundle.js

___________________

babel --presets react,es2015 js/source -d js/build

browserify js/build/app.js -o bundle.js
babel --presets react,es2015 web/js/src -d web/js/build

cat web/css/components/*.css > web/css/bundle.css

browserify web/js/build/components/App.js -o ./web/js/build/bundle.js

date;echo;


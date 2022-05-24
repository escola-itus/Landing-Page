const { src, dest, task } = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

function stylesMethod() {

	return src("./css/*.css")
		.pipe(concat("all.css"))
		.pipe(cssmin())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("."));
    	
}

function scriptsMethod() {
  return src("./scripts/index.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(".")); 
}

function htmlMethod() {
  return src("./index.html")
    .pipe(htmlmin())
    .pipe(dest("dist/"));
}

exports.styles = stylesMethod;
exports.scripts = scriptsMethod;
exports.html = htmlMethod;



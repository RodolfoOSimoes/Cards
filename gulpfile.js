
const Gulp = require('gulp')
const ImageMin = require('gulp-imagemin');
const Autoprefixer = require('gulp-autoprefixer');
const Sass = require('gulp-sass');
const CleanCSS = require('gulp-clean-css');

const IMAGES_SRC_PATH = './resources/images/'
const IMAGES_DIST_PATH = './public/img/'
const STYLES_SRC_PATH = './resources/styles/'
const STYLES_DIST_PATH = './public/css/'


/** styles */

const stylesSrcFiles = [
  STYLES_SRC_PATH + 'application.scss'
];
const stylesDistPath = STYLES_DIST_PATH;

Gulp.task('styles-basic-compilation', () => {
  return Gulp
    .src(stylesSrcFiles)
    .pipe(Sass().on('error', Sass.logError))
    .pipe(Autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(Gulp.dest(stylesDistPath));
});

Gulp.task('styles-optimization-compilation', () => {
  return Gulp
    .src(stylesSrcFiles)
    .pipe(Sass().on('error', Sass.logError))
    .pipe(Autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(CleanCSS({compatibility: 'ie8'}))
    .pipe(Gulp.dest(stylesDistPath));
});


/** images */

const imagesSrcFiles = [
  IMAGES_SRC_PATH + '*',
  IMAGES_SRC_PATH + '**/*',
  IMAGES_SRC_PATH + '**/**/*'
];
const imagesDistPath = IMAGES_DIST_PATH;

Gulp.task('images-copy', () => {
  return Gulp
    .src(imagesSrcFiles)
    .pipe(Gulp.dest(imagesDistPath));
});

Gulp.task('images-optimization', () => {
  return Gulp
    .src(imagesSrcFiles)
    .pipe(ImageMin())
    .pipe(Gulp.dest(imagesDistPath));
});


/** default */

Gulp.task('build', ['styles-optimization-compilation', 'images-optimization']);
Gulp.task('default', ['styles-basic-compilation', 'images-copy']);
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	uncss = require('gulp-uncss'),
	cssmin = require('gulp-cssmin'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace'),
	svgSprite = require('gulp-svg-sprites'),
	twig = require('gulp-twig'),
	gp = require('gulp-path'),
	gulpSrcFiles = require('gulp-src-files'),
	rigger = require('gulp-rigger'),
	flatten = require('gulp-flatten'),
	merge = require('merge-stream'),
	buffer = require('vinyl-buffer'),
	babel = require('gulp-babel'),
	debug = require('gulp-debug');

// browser
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
		port: 3030
	});
});

// sass
gulp.task('sass', function () {
	return gulp.src('app/css/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
		cascade: false
	}))
	.pipe(gulp.dest('dist/assets/css'))
	.pipe(browserSync.reload({stream: true}));
});

// min css
gulp.task('css:min', function () {
	return gulp.src('dist/assets/css/main.css')
	pipe(uncss({
		html: ['dist/**/*.html']
	}))
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/assets/css'))
	.pipe(browserSync.reload({stream: true}));
});

// libs js
gulp.task('js:libs', function () {
	gulp.src([
		// lib core
		'bower_components/jquery/dist/jquery.min.js',
		
		// scripts
		'bower_components/owl.carousel/dist/owl.carousel.min.js',
		'bower_components/jquery.countdown/dist/jquery.countdown.min.js',
		'bower_components/bPopup/jquery.bpopup.min.js',
		'bower_components/goodshare/goodshare.min.js',
		'bower_components/moment/min/moment.min.js',
		'bower_components/moment/min/moment-with-locales.min.js',
		'bower_components/moment-timezone/builds/moment-timezone-with-data-2012-2022.min.js',
		'bower_components/particles.js/particles.min.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/assets/js/'));
});

// main js
gulp.task('js:main', function () {
	gulp.src('app/js/*.js')
	.pipe(babel({
		presets: ["es2015"]
	}))
	.pipe(gulp.dest('dist/assets/js/'))
	.pipe(browserSync.reload({stream:true}));
});

// SVG Task
gulp.task('sprite', function () {
	return gulp.src('app/img/icons/**/*.svg')
	.pipe(svgSprite({
		cssFile: "../../app/css/_sprite.scss",
		preview: false,
		templates: { scss: true },
		svg: { sprite: "img/sprite.svg" }
	}))
	.pipe(gulp.dest('dist/assets'));

	return gulp.src('app/css/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
		cascade: false
	}))
	.pipe(gulp.dest('dist/assets/css'))
	.pipe(browserSync.reload({stream: true}));
});

// html builder
// gulp.task('html:build', function () {
// 	gulp.src('app/views/**/*.html')
// 	.pipe(rigger())
// 	.pipe(browserSync.reload({stream: true}));
// });

// var app = new gp.Path('app', 'dist');
// var views = app.generateAllPaths('views/', '', '', 'twig');
// var input = gp.generateBlob('app', 'components', '*', 'sass');
// var output = gp.generateBlob('dist', '**', '*', null);


gulp.task('html:build', function () {
	gulp.src('app/*.html')
	.pipe(rigger())
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['html:build', 'js:libs', 'js:main', 'sprite', 'browser-sync', 'sass'], function () {
	gulp.watch('app/**/*.scss', ['sass']);
	gulp.watch('app/**/*.html', ['html:build']);
	gulp.watch('app/img/icons/**/*.svg', ['sprite']);
	gulp.watch('app/js/*.js', ['js:main']);
});
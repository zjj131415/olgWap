/*
*npm install gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache --save-dev
*/
// load plugins
	var gulp = require('gulp'),
		sass = require('gulp-sass'),
		notify = require('gulp-notify'),
		rename = require('gulp-rename'),
		minifycss = require('gulp-minify-css'),
		livereload = require('gulp-livereload'),
		autoprefixer = require('gulp-autoprefixer');

// sass task
	gulp.task('sass', function(){
	    return gulp.src('src/sass/*.scss')
	    .pipe(sass({ outputStyle: 'expanded'}))
	    //添加前缀
	    .pipe(autoprefixer('last 20 version'))
	    //保存未压缩文件到我们指定的目录下面
	    .pipe(gulp.dest('src/css'))
	    //给文件添加.min后缀
	    .pipe(rename({ suffix: '.min' }))
	    //压缩样式文件
	    .pipe(minifycss())
	    //输出压缩文件到指定目录
	    .pipe(gulp.dest('dist/css'))
	    //提醒任务完成
	    .pipe(notify({ message: 'sass task complete' }));
	})
// watch task
	gulp.task('watch', function(){
		// Watch .scss files
	  gulp.watch('src/sass/*.scss', ['sass']);
	  // Create LiveReload server
	  // livereload.listen();
	  // Watch any files in assets/, reload on change
	  // gulp.watch(['assets/*']).on('change', livereload.changed);
	})

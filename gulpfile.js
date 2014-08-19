var gulp = require('gulp'),
	compass = require('gulp-compass'),
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr(),
	connect = require('gulp-connect');


gulp.task('styles', function() {
	return gulp.src('css/src/styles.scss')
		.pipe(compass({
			config_file: 'config.rb',
			sourcemap: true,
			debug : true,
			css: 'css',
			sass: 'css/src'
		}))
		//.pipe(livereload(server)) // conflicting errors in CLI still.
		.pipe(gulp.dest('css'));
});


gulp.task('markup', function() {
	return gulp.src('*.html')
		.pipe(gulp.dest(''))
		.pipe(livereload(server));
});


gulp.task('default', ['connect', 'watch']);


gulp.task('connect', function() {
	connect.server({
		root: '.',
		port: 9000,
		livereload: false
	});
});


gulp.task('watch', function() {
	server.listen(35729, function (err) {
		if (err) {
			return console.log(err);
		}

		gulp.watch('css/src/**/*.scss', ['styles']);
		gulp.watch('*.html', ['markup']);
	});
});
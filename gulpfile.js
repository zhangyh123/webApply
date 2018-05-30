const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");


gulp.task("builddev", () => {
	 return watch('./src/nodeuii/**/*.js', { ignoreInitial: false }, () => {
	 	 gulp.src('./src/nodeuii/**/*.js').pipe(babel({
	 	 	babelrc: false,   // 如果不设置按照外面的babelrc设置
	 	 	"plugins": ["transform-es2015-modules-commonjs"],
        }))
        	.pipe(gulp.dest('dist'));
	 })

       
})
let _task = ["builddev"];
// if(){

// }

gulp.task("default", _task);
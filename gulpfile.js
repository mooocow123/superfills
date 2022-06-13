const {src, dest, watch} = require('gulp');
const minify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const tasks =  {
    bundle() {
        return src([
            './code/fs.js',
            './code/path.js',
            './code/modules.js'
        ])
        .pipe(sourcemaps.init())
            .pipe(minify())
            .pipe(concat('main.bundle.js'))
            .pipe(minify())
            .pipe(sourcemaps.write())
            .pipe(dest('./dist'));
    },
    devWatcher() {
        watch('./code/**/*.js', tasks.bundle);
    }
}

for (const task in tasks) {
    exports[task] = tasks[task];
}
import gulp from 'gulp';
import browserSync from 'browser-sync';

// Config
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Plagins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fileInclude from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin';
import webpHtml from 'gulp-webp-html';
import gulpIf from 'gulp-if';

function html () {
    return gulp.src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'HTML',
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(gulpIf(app.isProd, htmlMin(app.htmlmin)))
        .pipe(gulp.dest(path.html.dest))
        .pipe(browserSync.stream());
};

export default html;
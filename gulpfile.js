import gulp from 'gulp';


// // Config
import { path } from './gulp/config/path.js';
import { app } from './gulp/config/app.js'

// Tasks
import clear from './gulp/tasks/clear.js';
import html from './gulp/tasks/html.js'
import scss from './gulp/tasks/scss.js'
import js from './gulp/tasks/js.js'
import img from './gulp/tasks/img.js'
import font from './gulp/tasks/font.js'
import server from './gulp/tasks/server.js';

// Watcher
function watcher () {
    gulp.watch(path.html.watch, html)
    gulp.watch(path.scss.watch, scss)
    gulp.watch(path.js.watch, js)
    gulp.watch(path.img.watch, img)
    gulp.watch(path.font.watch, font)
};

// Tasks
export { html }
export { watcher }
export { server }
export { scss }
export { js }
export { img }
export { font };
export { clear };

const build = gulp.series(clear, html, scss, js, img, font);

// const dev = gulp.series(clear, html, scss, js, font, gulp.parallel(watcher, server))
const dev = gulp.series(build, gulp.parallel(watcher, server))

//Assembly
export default app.isProd ? build : dev;

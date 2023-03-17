const pathSrc = './src';
const pathDest = './dist';

export const path = {
    root: pathDest,
    html: {
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },
    scss: {
        src: pathSrc + '/style/*.{sass,scss}',
        watch: pathSrc + '/style/**/*.{sass,scss}',
        dest: pathDest + '/style'
    }, 
    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    }, 
    img: {
        src: pathSrc + '/images/*.{png,jpg,jpeg,gif,svg}',
        watch: pathSrc + '/images/**/*.{png,jpg,jpeg,gif,svg}',
        dest: pathDest + '/images'
    }, 
    font: {
        src: pathSrc + '/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/font'
    }, 
}
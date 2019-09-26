const {task,src,dest,watch,parallel,series} = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

//Reload


const reload = (done)=>{
    browserSync.reload();
    done();
};

//sources and destinations

//SASS
const styleSRC = './src/scss/index.scss';
const styleDEST = './dist/css/';
const styleWatch = './src/scss/**/*.scss';

//JS
const jsSRC = 'index.js';
const jsFolder = './src/js/';
const jsDEST = './dist/js/';
const jsWatch = './src/js/**/*.js';

//Images

const imageSRC = './src/images/*.png';
const imageDEST = './dist/images/'; 
const imageWatch = '/.src/images/**/*.png';

//Html

const htmlSRC = './src/index.html';
const htmlDEST = './dist/';
const htmlWatch = './src/*.html';

//Browser-Sync
const browserS = ()=>{
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        single: true
    })
};



//compile sass

const style = (done)=>{
    src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error',sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(dest(styleDEST));

        done();
};


//bundle js files

const js = (done)=>{
    browserify({
        entries: [jsFolder + jsSRC]
    })
    .transform(babelify,{presets:['@babel/preset-env','@babel/preset-react']})
    .bundle()
    .pipe(source(jsSRC))
    .pipe(rename({extname:'.min.js'}))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps:true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(dest(jsDEST));

    done();
};


// optimize images

const imageMin = (done)=>{
    src(imageSRC)
     .pipe(imagemin())
     .pipe(dest(imageDEST));
    done();
};



// Copy Html

const html = (done)=>{
    src(htmlSRC)
        .pipe(dest(htmlDEST));
    done();
};


//Tasks
task('browser-sync',browserS);
task('js',js);
task('style',style);
task('imageMin',imageMin);
task('html',html);


//Watch Files

const watchFiles = ()=>{
    watch(styleWatch,series(style,reload));
    watch(jsWatch,series(js,reload));
    watch(htmlWatch,series(html,reload));
    watch(imageWatch,series(imageMin,reload));
    src(jsDEST+'index.min.js')
        .pipe(notify({message: 'Gulp is watching...'}));

}

//default task

task('default',parallel(js,style,imageMin,html));

//watch task

task('watch',parallel(browserS,watchFiles));

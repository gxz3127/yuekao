var gulp=require("gulp");

var server=require("gulp-webserver");

var data=require("./src/data/data.json");

gulp.task("default",function(){
    gulp.src("./src")
    .pipe(server({
        port:"6754",
        host:""
    }))
})
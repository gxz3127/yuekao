var gulp=require("gulp");

var server=require("gulp-webserver");

var data=require("./src/data/data.json");

gulp.task("default",function(){
    gulp.src("./src")
    .pipe(server({
        port:"6754",
        host:"169.254.242.144",
        open:true,
        livereload:true,
        middleware:function(req,rea,next){
            next();
        }
    }))
})
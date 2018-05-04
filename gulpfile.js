var gulp=require("gulp");

var server=require("gulp-webserver");

var url=require("url");

var data=require("./src/data/data.json");
var list=require("./src/data/seach.json");

gulp.task("default",function(){
    gulp.src("./src")
    .pipe(server({
        port:"6754",
        host:"169.254.242.144",
        open:true,
        livereload:true,
        middleware:function(req,res,next){
            if(req.url==="/index"){
                res.end(JSON.stringify(data))
            }else if(/\/api\/seach/g.test(req.url)){
                var id=url.parse(req.url,true).query.id; 
                var list=seach.seachlist; 
                var target={};
                for(var i=0;i<seach.seachlist.length;i++){
                    if(id==list[i].id){
                        target=list[i];
                    }
                }
                res.end(JSON.stringify(target))
            }
            next();   
        }
    }))
})


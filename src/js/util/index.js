require(["jquery","iscroll","handlebars"],function($,iscroll,handlebars){
    
     $("#uls").on("click","li",function(){
         var ind=$(this).index(); 
        $(this).addClass("pink").siblings().removeClass("pink"); 
        $(".nei .box").eq(ind).show().siblings().hide();
     })

    //iscroll
    var width=$("#uls li").outerWidth(true);
    var length=$("#uls li").length; 
    $("#uls").width(width*length); 
    var navscroll=new iscroll(".nav",{
        scrollX:true,
        scrollY:false
    })  

    $.ajax({
        url:"/index",
        dataType:"json",
        success:function(res){ 
            var data=res.list;
            list(data)
        }, 
        error:function(error){
            console.log(error);
        }  
    }); 
    
    //渲染页面
    function list(data){
        var listtext=$("#list-text").html();
        var template=handlebars.compile(listtext);
        var html=template(data)
        $(".one").html(html); 
    }
})
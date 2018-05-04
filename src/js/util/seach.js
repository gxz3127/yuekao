 require(["jquery","handlebars"],function($,handlebars){
    var url=location.search;
    var params={};  
    if(url.indexOf("?") != -1){
         var arr=url.slice(1).split("&");
         for(var i=0,len=arr.length;i<len;i++){
             var obj=arr[i].split("=");
             params[obj[0]]=obj[1]
         }
    } 

    $.ajax({
        url:"/api/seach?id="+params.id,
        dataType:"json",
        success:function(res){
            console.log(res);
            data(res);
        },
        error:function(error){
            console.warn(error);
        }
    })

    //点击切换详情
    $('#list').on("click","em",function(){
         var ind=$(this).index();
         $("section .nei").eq(ind).show().siblings().hide();
    })

    //渲染详情页面
     function data(res){
        var listtext=$("#list-text").html();
        var template=handlebars.compile(listtext);
        var html=template(data)
        $(".one").html(html); 
     }
})
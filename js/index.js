$.ajax({
	type:"get",
	url:"http://yuanhang.bj.bdysite.com/php/new_add.php",
	dataType:"json",
	jsonp:"callback",
	success:function(data){
		var news = data.result;
		var news_data = news.data;
		var $iframe = $("<iframe>").attr("name","iframe1").appendTo($("section"));
//		console.log($iframe.attr("name"));
			for(var i = 0; i < news_data.length;i++){
			var $oul = $("<ul>").appendTo($(".hot_square"));
			var $oli = $("<li>").appendTo($oul).addClass("first");
			var $oa = $("<a>").appendTo($oli).addClass("box");
			$oa.attr({
				"href":news_data[i].url,
				"target":"iframe1"
			});
			$oa.on("click",function(){
				var _this = $(this);
				$iframe.css("display","block");
				$iframe.attr({
					"src":_this.attr("href")	
				});
			});
			var $image = $("<div>").appendTo($oa).addClass("image");
			$("<div>").appendTo($image).html("<img src="+news_data[i].thumbnail_pic_s+"/>");
			$("<h2>").appendTo($oa).addClass("title").html(""+news_data[i].title+"");
			var $icfont = $("<div>").appendTo($oa).addClass("icfont");
			$("<span>").appendTo($icfont).addClass("iconfont ic_span").html("&#xe60b;").css("font-size","40px");
			$("<em>").appendTo($icfont).addClass("iconfont ic_em").html("&#xe60c;").css("font-size","40px");
			
			
			var $oli = $("<li>").appendTo($oul).addClass("second");
			var $oa = $("<a>").appendTo($oli).addClass("box");
			$oa.attr({
				"href":""+news_data[++i].url+"",
				"target":"iframe1"
			});
			$oa.on("click",function(){
				var _this = $(this);
				$iframe.css("display","block");
				$iframe.attr({
				"src":_this.attr("href"),
				"frameborder":"0"
				});
				
			});
			var $image = $("<div>").appendTo($oa).addClass("image");
			$("<div>").appendTo($image).html("<img src="+news_data[i].thumbnail_pic_s+"/>");
			$("<h2>").appendTo($oa).addClass("title").html(""+news_data[i].title+"");
			var $icfont = $("<div>").appendTo($oa).addClass("icfont");
			$("<span>").appendTo($icfont).addClass("iconfont ic_span").html("&#xe60b;").css("font-size","40px");
			$("<em>").appendTo($icfont).addClass("iconfont ic_em").html("&#xe60c;").css("font-size","40px");
			}
			
//				var myScroll = new IScroll("section");
		
	},
	error:function(){
		alert("fail");
	}
});

var $p = $(".h_return");
$p.click(function(){
	$("iframe").css("display","none");
})


function bodyScale(){
			var devicewidth=document.documentElement.clientWidth;
				var scale=devicewidth/1080;
				document.body.style.zoom=scale;
			}
			window.onload=window.onresize=function(){
				bodyScale();
//				var myScroll = new IScroll("section",{mouseWheel:true,click:true});
			}
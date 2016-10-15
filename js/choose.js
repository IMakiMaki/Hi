
$(function(){
	//标签随机位置
	//	颜色存放
	var arr = ["rgba(252,62,110,0.6)","rgba(226,17,0,0.4)",
				"rgba(200,200,169,0.8)","rgba(252,157,154,0.5)",
				"rgba(35,235,185,0.7)","rgba(249,205,173,0.8)",
				"rgba(64,116,52,0.4)","rgba(255,94,72,0.6)",
				"rgba(255,252,153,0.8)","rgba(85,72,64,0.7)",
				"rgba(225,238,210,0.8)","rgba(147,224,255,0.8)",]
				
//li添加
	var count = 0; //选择计数器
	$.ajax({
		url:"json/hobby.json",
		type: 'get',
		dataType: 'text',
		async:true,
		success:function(data){
			var data = eval(data);
			console.log(data.length);
			var tag = document.getElementById("tags");
			var num = Math.floor(data.length*Math.random());
			change();
			$("#change_tags").on("touchstart",function(){
				num = Math.floor(data.length*Math.random());
				tag.innerHTML = "";
				change();
			})
		function change(){
			for(var i = 0; i < data[num].good.length; i++){
				var aLi = document.createElement("li");
				tag.innerHTML += "<li>" + data[num].good[i] + "</li>"
			}
			var tagLi = $("#tags li");
			var show_tag = document.getElementById("show_tag");	
			tagLi.on("touchend",function(){//绑定选择标签事件
				show_tag.appendChild($(this)[0]);
				var get = document.getElementById("get");
				get.value += this.innerHTML+" ";
			
				count++;
				if(count > 2){
					tagLi.off("touchend");//解除绑定
					get.value = get.value.slice(0,get.value.length-1);
					tagLi.on("touchend",function(){
						alert("只能选择三个哦");  
					})
				}	
			});
			
			//	颜色选取,位置摆放
			for (var i = 0; i < tagLi.length; i++){
				var numL = parseInt(Math.random()*50) + 20;
				var numT = parseInt(Math.random()*80) +9;
				tagLi[i].style.marginLeft = numL + "px";
				tagLi[i].style.marginTop = numT + "px";
				tagLi[i].style.background = arr[i];	
				tagLi[i].style.color = "#000";
				tagLi[i].style.fontSize = "30px";
				tagLi[i].style.boxShadow ="0px 0px 10px "+arr[i];	
				
			}
		}
	}
});

	//长按时间删除

		$("#show_tag li").on({
		touchstart: function(e){
			timeOutEvent = setTimeout("longPress()",500);
		 	e.preventDefault();
		},
		touchmove: function(){
            		clearTimeout(timeOutEvent); 
		    	timeOutEvent = 0; 
		},
		touchend: function(){
	   		clearTimeout(timeOutEvent);
				if(timeOutEvent!=0){ 
			   		alert("你这是点击，不是长按"); 
				} 
				return false; 
			}
		})


 
	function longPress(){ 
    	timeOutEvent = 0; 
    	alert("长按事件触发发"); 
	} 
  
	  
	  
	
	
	
	 
	//长按事件结束
})

$(document).ready(function(){$(".topicName").on("mouseenter",function(){$(this).css("primary"==level?{color:"yellow","text-decoration":"underline"}:{color:"white","text-decoration":"underline"}),i=$(this).text(),$("#currentTopic").text(i)}).on("mouseleave",function(){$(this).css("primary"==level?{color:"white","text-decoration":"none"}:{color:"black","text-decoration":"none"}),$("#currentTopic").text(noTopic)}).on("click",function(){clickS.play(),pageURL.indexOf(!0)?(j=pageURL.indexOf("?"),myString=pageURL.substr(0,j)):myString=pageURL,myString=myString+"?"+topicLabel+i+"&"+levelLabel+displayLevel,console.log('path1='+myString),window.location.href=myString}),$("#otsSwitch").on("mouseenter",function(){$(this).css({color:"#000",background:"#fff","border-color":"#000"})}).on("mouseleave",function(){$(this).css({color:xStrokeCol,background:xGroundCol,"border-color":xStrokeCol})}).on("click",function(){clickS.play(),level="primary"==level?secLevel:primLevel,window.location.href=lotopicURL+"?"+levelLabel+level}),$("#loading").remove()});
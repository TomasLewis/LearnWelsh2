function animate(){function t(){var t,n;for(t=0;s>t;t+=1)n=l[t],n.x+=n.vx,n.y+=n.vy,n.x>a?(n.x=a,n.vx*=u):n.x<0&&(n.x=0,n.vx*=u),n.y>r?(n.y=r,n.vy*=u):n.y<0&&(n.y=0,n.vy*=u)}function n(){i.clearRect(0,0,a,r);var t,n;for(t=0;s>t;t+=1)n=l[t],i.globalAlpha=Math.random(),i.fillStyle="rgb("+Math.floor(200*Math.random()+1)+","+Math.floor(200*Math.random()+1)+","+Math.floor(200*Math.random()+1)+")",i.beginPath(),i.arc(n.x,n.y,Math.floor(10*Math.random()+1),0,2*Math.PI,!1),i.fill()}var o,e,i,a,r,l=[],s=40,u=-1;for(e=document.getElementById("canvas"),i=e.getContext("2d"),a=e.width,r=e.height,o=0;s>o;o+=1)l.push({x:Math.random()*a,y:Math.random()*r,vx:10*Math.random()-5,vy:10*Math.random()-5});setInterval(function(){t(),n()},1e3/24)}function playWinAudio(){winHowl.play()}var i,aW,goDS=!1,winHowl,lblTop,lblFntS;$(document).ready(function(){function t(){defaultStatusString="0"==topicsSelected?overlayStrings[14]:overlayStrings[0],setStatusString(defaultStatusString),myString=overlayStrings[1],$("#playButton").find("#playG").html(arrowSign(250,strokeCol,groundCol,0)).end().find(".arraLabel").css({top:lblTop,width:"220px","font-size":lblFntS,"font-weight":"700"}).text(myString).end().on("mouseenter",function(){setStatusString(overlayStrings[1]),chngArraSign($(this),"#fff","#000")}).on("mouseleave",function(){setStatusString(defaultStatusString),chngArraSign($(this),groundCol,strokeCol)}).on("click",function(){clickS.play(),startGame(),$("#gameSettings").animate({top:"-500"},{duration:"400"},{complete:function(){$("#gameSettings").remove()}})}),$("#loading").remove(),"0"!=topicsSelected&&(j=Math.floor(6*Math.random()+1),winHowl=new Howl({urls:[soundURL+"winmusic/music"+j+".mp3"],loop:!0}),$("#changeTopicButton").on("mouseenter",function(){setStatusString(overlayStrings[4])}).on("mouseleave",function(){setStatusString(defaultStatusString)}).on("click",function(){clickS.play(),window.location.href=lotopicURL}),$("#gameOver_playagain").on("mouseenter",function(){setStatusString(overlayStrings[9])}).on("mouseleave",function(){setStatusString(defaultStatusString)}).click(function(){location.reload()}),$("#gameOver_changegame").on("mouseenter",function(){setStatusString(overlayStrings[10])}).on("mouseleave",function(){setStatusString(defaultStatusString)}).on("click",function(){clickS.play(),window.location.href=logamesURL}),$("#gameOver_test").on("mouseenter",function(){setStatusString(overlayStrings[11])}).on("mouseleave",function(){setStatusString(defaultStatusString)}).on("click",function(){clickS.play(),window.location.href=lotestURL}),$("#gameOver_music").on("mouseenter",function(){setStatusString(overlayStrings[12])}).on("mouseleave",function(){setStatusString(defaultStatusString)}).on("click",function(){1==winMusic?(winHowl.stop(),$(this).find(".onGreenBtn").css("border-color","#66CC66").find("#horn").css("fill","#66CC66")):(winHowl.play(),$(this).find(".onGreenBtn").css("border-color","#fff").find("#horn").css("fill","#fff")),winMusic=1==winMusic?0:1}))}"en"!==shortCode?(lblTop="7px",lblFntS="40px"):(lblTop="11px",lblFntS="50px"),reduceToHtWdth("#ctN"),$("#gameOver").on("mouseenter",function(){0==goDS&&(defaultStatusString=overlayStrings[8],setStatusString(defaultStatusString),goDS=!0)}),"0"==topicsSelected?t():preload(topicNames,"small",t)}),$.fn.textWidth=function(){var t=$(this).html();$(this).html("<span>"+t+"</span>");var n=$(this).find("span:first").width();return $(this).html(t),n};
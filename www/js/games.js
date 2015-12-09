function games(){
modStringsEN='["Loading game thumbnails","Choose a game by clicking on the sign","learn-xxx-online","xxx-games","Next","Previous"]';
modStrings=jQuery.parseJSON(modStringsEN);

var thumbNailsPath = 'visuals/assets/lo_game-thumbs/',gamesJSON,num,names=[],descriptions=[],thumbnails=[],urls=[],html='',yLoc,xLoc;

jQuery.getJSON("json/games.json", function(data){         
    gamesJSON=data.game;
	
num = gamesJSON.length;

for(i=0;i<num;i++){
			thumbnails[i]= thumbNailsPath + gamesJSON[i].url + '.png';
			urls[i]=gamesJSON[i].url;
}
thumbnails[num-1]=thumbNailsPath + gamesJSON[num-1].url +'_'+ilanguage+'.png';
	
j=24;yLoc=20;xLoc=j,k=0;
for(i=0;i<num;i++){
	k++;
	html+= '<div class="gameGreen" id="'+i+'" style="left:'+xLoc+"px;top:"+yLoc+'px;">';
	html+= '<div class="thumbs"><div id="thumb'+i+'"><img src="'+thumbnails[i]+'" width="110px" height="110px" /></div></div>';	
	html+= '<div class="desc">'+gamesJSON[i].shortDescription+"</div>";
	html+= '<div id="as'+i+'" class="arraSign">'+arra206+'<div class="arraLabel206" id="al'+i+'" style="color:'+strokeCol+'">'+gamesJSON[i].displayname+"</div></div>";
	html+= "</div>";
	
	xLoc+=244;
	if(k==3){
		xLoc=j;k=0;yLoc+=220;
	}
}

$("#gameSigns").html(html);
chngArraSign($(".arraSign"),groundCol,strokeCol);
	
for(k=$('[id^="al"]').length,i=0;i<k;i++)
if(e=$("#al"+i)[0].scrollWidth,e>182)for(var t=18;t>8&&($("#al"+i).css("font-size",String(t+"px")),e=$("#al"+i)[0].scrollWidth,!(e<=182));t--);

$("#loading").remove(),
$("#backButton").css("visibility","hidden"),
defaultStatusString=modStrings[1],
$("#statusBar").text(defaultStatusString),
$(".gameGreen").on(pStart,function(){
i=$(this).attr("id");
chngArraSign($("#as"+i),"#FFF","#000");
})
.on(pEnd,function(){chngArraSign($("#as"+i),groundCol,strokeCol);})
.on(pUp,function(){
playInterface("click1");
eGameName=gamesJSON[i].url;
gameSettings=1;
jQuery.getJSON("json/games/"+eGameName+".json", function(data){         
    modStrings=data.modStringsEN;
	loadPage(eGameName);
});

})



});

}



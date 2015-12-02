function topics(){
var Categories,sC,cV,dispLv,numTopics,myTopic,names=[],descriptions=[],displaynames=[],displayname,bw,bh,topicsJSON,firstScreen,firstView,start="mousedown touchstart";

//load json for topics + define variables
$.getJSON("json/topics/"+level+"_"+shortCode+".json",function( data ) {

topicsJSON=data;

modStringsEN='["Choose a set of topics by clicking on a sign","Choose a topic by words or sentences","WORDS or SENTENCES","words","sentences","for primary / elementary","for secondary","pictures","Show me topics for","AGE","Choose a topic from a group","CATEGORIES","You have chosen the topic xxx","Go to the lesson with this topic (or go straight to the games)","Start the lesson","Straight to the games","Choose a word based topic by clicking on a sign","Choose a sentence based topic by clicking on a sign","You are here:","BEGINNERS","INTERMEDIATE","Choose a topic from this category by clicking on a sign","Choose a topic"]';
modStrings=jQuery.parseJSON(modStringsEN);

"en"==shortCode?(Categories=["Activity","Animals","Body","Colours","Family","Food","Go","Grammar","Holidays","Home","Numbers","People","Place","School","Time","World"],"primary"==level&&Categories.splice(8,1)):"es"==shortCode&&(Categories=["Actividad","Alimentos","Animales","Colores","El cuerpo","El hogar","El mundo","El tiempo","Familia","Gramática","La escuela","Lugares","Números","Personas","Vacaciones","Viajar"],"primary"==level&&Categories.splice(14,1));
//paint page
$("#sCurrTop").css({"background-color":groundCol,"color":strokeCol,"border-color":strokeCol})
j=arra147+'<div class="arraLabel"></div>';
for(i=1;i<9;i++)myString=Categories[i-1],$("#cat"+i+"Arrow").html(j).find(".arraLabel").text(myString);
for(i=11;i<19;i++)void 0!=Categories[i-3]&&(myString=Categories[i-3],myString.length>10?$("#cat"+i+"Arrow").html(j).find(".arraLabel").css("font-size","14px").text(myString):$("#cat"+i+"Arrow").html(j).find(".arraLabel").text(myString));

$("#catWords").html(j).find(".arraLabel").text(modStrings[3]);
$("#catSentences").html(j).find(".arraLabel").text(modStrings[4]);
//set arra cols to level
chngArraSign($(".ArrowSign"),groundCol,strokeCol);
$("#currentTopic").css({"background-color":groundCol,"color":strokeCol,"border-color":strokeCol});
if(level=="primary"){$("#numPics").text(10);myString=modStrings[20]}else{$("#numPics").text(20);myString=modStrings[19]}
$("#switchL").html(j).find(".arraLabel").css("font-size","15px").text(myString);

if(level=="primary"){$("#1920").text(modStrings[19])}else{$("#1920").text(modStrings[20])}
if(topicsSelected=="0"){j=noTopic}else{j=displaytopic}
j+="<br />";
if(level=="primary"){ j+=modStrings[5]}else{ j+=modStrings[6] }
$("#sCurrentTopicText").html(j);

$("#sRedLeft").append(modStrings[22]),
$("#18").text(modStrings[18]),
$("#switchLevelText").text(modStrings[8]),

$("#2").text(modStrings[2]);
$("#1").text(modStrings[1]);
$("#10").text(modStrings[10]);
$("#11").text(modStrings[11]);
$("#7").text(modStrings[7]);
$("#catWords").find(".arraLabel").text(modStrings[3]);
firstScreen=$("#content").html(),firstView=!0;
$("#backButton").on("touchend",function(){goBack()});
first();

});

function first(){
0==firstView&&$("#content").html(firstScreen),firstView=!1,$("#loading").remove(),$("#sign_middle2").css("left","504px"),names.length=0,descriptions.length=0,displaynames.length=0,$("#back").css("visibility","hidden"),defaultStatusString=modStrings[0],setStatusString(defaultStatusString),
chngArraSign("#switchLevelArra",xGroundCol,xStrokeCol);

$("#switchLevelArra")
.on("pointerenter pointerdown",function(e){e.preventDefault;
console.log('switchLevelArra start enter');
chngArraSign($(this),"#FFF","#000");
})
.on("pointerleave",function(e){
e.preventDefault();
chngArraSign($(this),xGroundCol,xStrokeCol)})
.on("pointerup",function(){
clickS.play(),level="primary"==level?secLevel:primLevel;
switchLevel();//shared function makes level visual changes
loadPage("topics");
}),

$("[id^=cat]").on("touchstart",function(){chngArraSign($(this),"#FFF","#000")}).on("touchend",function(){
sC=$(this).text();
second();
});

}

function second(){
clickS.play(),
i=$(this).attr("id"),
"catSentences"==i||"catWords"==i?(sC="catSentences"==i?"sentences":"words",cV="texttype"):(cV="category"),0==names.length&&(numTopics=topicsJSON.topic.length,$.each(topicsJSON.topic,function(e,t){"category"==cV?-1!=t.category.indexOf(sC)&&(names.push(t.name),displaynames.push("en"==shortCode?t.name:t.displayname),descriptions.push(t.description)):-1!=t.texttype.indexOf(sC)&&(names.push(t.name),displaynames.push("en"==shortCode?t.name:t.displayname),descriptions.push(t.description))})),

$("#content").empty(),html="",$("#sign_middle2").css("left","440px"),

html+='<div style="position:absolute;left:-1px;top:80px;width:757px;height:12px;"><div class="pipeH"></div></div>',
html+='<div style="position:absolute;left:-1px;top:228px;width:757px;height:12px;"><div class="pipeH"></div></div>',
html+='<div style="position:absolute;left:-1px;top:378px;width:757px;height:12px;"><div class="pipeH"></div></div><div id="topicSigns"></div>',
html+='<div id="forwardArra"><div id="forwardGraphic">'+triArra(14,"#000",0)+'</div></div>',
html+='<div id="backwardArra"><div id="backpic">'+triArra(14,"#000",1)+'</div></div>',
$("#content").append(html),
$("#back").css("visibility","visible");

function n(){
var e,n=false,r=false,o,num=0,s,t;
$("#topicSigns").empty();
html="";j=20;yLoc=20;xLoc=j;
for(i=startIndex;i<numToShow;i++){
num+=1;if(names[i]){
myString=names[i];t=myString;s=t.length;if(t.substr(s-1,1)=="?"){t=t.substring(0,s-1)}t="../www/visuals/assets/topic-thumbs/"+t+".png";
html+='<div class="greenTopSign" name="'+myString+'" title="'+displaynames[i]+'" style="position:absolute;left:'+xLoc+"px;top:"+yLoc+"px;width:222px;height:126px;border:4px solid white;border-radius:15px;background:"+signGreen+';cursor:pointer;">';
html+='<div style="position:absolute;left:8px;top:6px;width:66px;height:66px;border:2px solid #fff;border-radius:7px;overflow:hidden;"><img src="'+t+'" width="66px" height="66px"/></div>';
html+='<div style="position:absolute;right:6px;top:8px;width:130px;height:70px;overflow:hidden;color:white;"><p style="text-align:left;line-height:16px;font-size:13px;">'+descriptions[i]+"</p></div>";
html+='<div class="arraSign" id="topicArraContent">'+arra206+'<div class="arraLabel206">';
if(shortCode=="en"){html+=names[i]}else{html+=displaynames[i]}
html+="</div></div></div>";
xLoc+=244;
if(num==3){xLoc=j;num=0;yLoc+=148}
}}
$("#topicSigns").append(html);

$(".arraLabel206").each(function(t){e=$(".arraLabel206")[t].scrollWidth;
console.log('for t='+t+', e = '+e);
if(e>182){
console.log('>182!');
for(var n=16;n>8;n--){
$(this).css("font-size",String(n+"px"));e=$(".arraLabel206")[t].scrollWidth;if(e<=182){break}
}}
});

$("#forwardArra").css("visibility","hidden");
$("#backwardArra").css("visibility","hidden");
switch(topicsScreen){case 0:if(numTopics>9){n=true}break;default:r=true;o=(topicsScreen+1)*9;if(numTopics>o){n=true}}

if(n==true){$("#forwardArra").css({visibility:"visible","z-index":"999"})}
if(r==true){$("#backwardArra").css({visibility:"visible","z-index":"999"})}

$("[id^=topicArraContent]").off().on("mouseenter",function(){chngArraSign($(this),"#FFF","#000")}).on("mouseleave",function(){chngArraSign($(this),groundCol,strokeCol)});
}

numTopics=numToShow=names.length,numTopics>9&&(numToShow=9),topicsScreen=0,startIndex=0,n(),

$("#forwardArra,#backwardArra").on("touchstart",function(){$(this).find("#bgFill").css("fill","red")}),
$("#forwardArra").on("touchend",function(){clickS.play(),$("#topicSigns").empty(),topicsScreen+=1,startIndex=9*topicsScreen,numToShow=startIndex+9,n()}),
$("#backwardArra").on("touchend",function(){clickS.play(),$("#topicSigns").empty(),topicsScreen-=1,startIndex=9*topicsScreen,numToShow=startIndex+9,n()}),
$("#content").off().on("touchend","div[class=greenTopSign]",function(){clickS.play(),myTopic=$(this).attr("name"),displayname=$(this).attr("title"),

topic = myTopic;
displaytopic=displayname;

//load json for this topic + define variables
$.getJSON("json/topics/"+level+"/"+topic+".json",function( data ) {
  i=data.media;
  picsarray=i.split(",");
  
  i=data.labels;
  j=i.ilanguage;
  labelsarray=j.split("||");
	if(shortCode=='es'){ j=i.Spanish}else{j=i.English}ilabelsarray=j.split("||");
  loadPage("tutorial");
  });


})

function e(){var e,n,o=!1,r=!1;for($("#topicSigns").empty(),html="",num=0,j=20,yLoc=20,xLoc=j,i=startIndex;i<numToShow;i++)num+=1,names[i]&&(myString=names[i],t=myString,s=t.length,"?"==t.substr(s-1,1)&&(t=t.substring(0,s-1)),t=resourceurl+"visuals/assets/topic-thumbs/"+t+".png",html+='<div class="greenTopSign" name="'+myString+'" title="'+displaynames[i]+'" style="position:absolute;left:'+xLoc+"px;top:"+yLoc+"px;width:222px;height:126px;border:4px solid white;border-radius:15px;"+shadow+"background:"+signGreen+';cursor:pointer;">',html+='<div style="position:absolute;left:8px;top:6px;width:66px;height:66px;border:2px solid #fff;border-radius:7px;overflow:hidden;"><img src="'+t+'" width="66px" height="66px"/></div>',html+='<div style="position:absolute;right:6px;top:8px;width:130px;height:70px;overflow:hidden;color:white;"><p style="text-align:left;line-height:16px;font-size:13px;">'+descriptions[i]+"</p></div>",html+='<div class="arraSign" id="topicArraContent">'+arra206+'<div class="arraLabel206">',html+="en"==shortCode?names[i]:displaynames[i],html+="</div></div></div>",xLoc+=244,3==num&&(xLoc=j,num=0,yLoc+=148));switch(html+="</div>",$("#topicSigns").append(html),$(".arraLabel206").each(function(i){if(e=$(".arraLabel206")[i].scrollWidth,e>182)for(var t=16;t>8&&($(this).css("font-size",String(t+"px")),e=$(".arraLabel206")[i].scrollWidth,!(182>=e));t--);}),$("#forwardArra").css("visibility","hidden"),$("#backwardArra").css("visibility","hidden"),topicsScreen){case 0:numTopics>9&&(o=!0);break;default:r=!0,n=9*(topicsScreen+1),numTopics>n&&(o=!0)}1==o&&$("#forwardArra").css({visibility:"visible","z-index":"999"}),1==r&&$("#backwardArra").css({visibility:"visible","z-index":"999"}),$("[id^=topicArraContent]").off().on("touchstart",function(){chngArraSign($(this),"#FFF","#000")}).on("touchend",function(){chngArraSign($(this),groundCol,strokeCol)})}

}
function goBack(){clickS.play();first();$("#back").css("visibility","hidden");}
}
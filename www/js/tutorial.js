function tutorial(){
function goBack(){console.log('goBack 1');playInterface("click1");first();$("#back").css("visibility","hidden");}
$("#backButton").off(pUp).on(pUp,function(){goBack()});
var picNum=0,correct=!1,answerTrue,rightAnswers,starPicsArray=[],starBoxVisible=!1,eoAudioArray=[],answer1,answer2,myString=soundURL+"interface/lang/"+shortCode+"/",isThis=myString+"is-this-a-picture-of.mp3",isThisH,isThisEO=myString+"is-this-a-picture-of.mp3",isThisEOH,orIsIt=myString+"or-is-it-a-picture-of.mp3",orIsItH,whatIsThis=myString+"what-is-this-a-picture-of.mp3",eoAns1,eoAns2,myString3,firstScreen,firstView,multipleChoiceArray;

modStringsEN='["FULL LESSON<br />All Activities","LESSONS","No lesson thanks<br />GO TO THE GAMES","topics","SELECT YOUR<br />LESSON TYPE","Choose your lesson from the options","FULL LESSON","QUICK LESSON","Do all the activities to learn the language for this topic","Do a quick set of activities to remind yourself of the language for this topic","Play games to learn the language for this topic","Choose a different topic","Choose your lesson from the options","1. Introduction","2. Yes or No?","3. Either / Or","4. What is it?","Start the lesson","Listen to the words.","Say the words.","Look at how the words <br>are written.","Listen to the words again.","Write down the words.","YES or NO?","If the words match the picture click the tick.","Otherwise, click the cross button.","EITHER.. OR..","Click the button for the words that match the picture.","WHAT IS IT?","Click the words that match the picture.","INTRODUCTION","You will see the pictures for this topic.","You will see the words.","You will hear the words.","Listen to the words.","Say the the words.","Write down the words for each picture.","INTRODUCTION end","Now you have seen the pictures.","You have seen and heard the words.","To do that again click the small button.","That is the end of xxx","xxx ACTIVITY","For xxx click the big button.","You got xxx questions right.","You will see a picture.","You will see and hear two sets of words.","You will see ten choices of words.","Click the button for the words that match the picture.","You will see the pictures one at a time.","You will see and hear some words.","To play some games click the big button.","Listen to the words and look at the writing for these pictures","Click on the answer to the following Yes / No questions...","NOT QUITE RIGHT","Click the text that matches the picture for these Either / or questions...","Select the correct text for the following pictures...","Do that again","Start the activity","Do the next one","Activity complete. Select an option above.","The correct answer was YES.","The correct answer was NO.","This is a picture of :","Let\'s try the next one","Hard luck!","Start the xxx activity","SELECT AN OPTION","Introduction to the lesson","Play the games"]';
modStrings=jQuery.parseJSON(modStringsEN);
console.log('lesson start, numStrings='+modStrings.length);
$("#0").html(modStrings[0]);
$("#1").html(modStrings[1]);
$("#3").html(modStrings[3]);
$("#introButton").html(modStrings[30]);
$("#goGames").html(modStrings[2]);

landed();

function landed(){$("#back").css("visibility","hidden"),firstScreen=$("#content").html(),firstView=!0,first()}

function first(){
0==firstView&&$("#content").html(firstScreen),firstView=!1,$("#loading").css("visibility","hidden");
/* var i=modStrings[70].replace("xxx",language); */
defaultStatusString=modStrings[5],setStatusString(defaultStatusString),

$("#selButtonFull").on(pStart,function(){setStatusString(modStrings[8])})
.on(pEnd,function(){setStatusString(defaultStatusString);})
.on(pUp,function(){playInterface("click1");second()});

$("#goGames").on(pStart,function(){setStatusString(modStrings[10])})
.on(pEnd,function(){setStatusString(defaultStatusString)})
.on(pUp,function(){playInterface("click1");loadPage("games");});

$("#introButton").on(pStart,function(){setStatusString(modStrings[68])})
.on(pEnd,function(){setStatusString(defaultStatusString)})
.on(pUp,function(){playInterface("click1");$("#pageInfoFX").css("display","block");});

$("#topicsSign").on(pStart,function(){setStatusString(modStrings[11])}).on(pUp,function(){playInterface("click1");loadPage("topics");});
}
function sharedEndInterface(i){
$("#introBlueGoArra").off(pEnd).off(pStart);
myString='<div id="introBlueTitle" style="color:'+strokeCol+'"></div><div id="introBlueText" style="color:'+strokeCol+'"></div><div id="introBlueAgain"><div class="arraSign">'+arra206+'<div class="arraLabel206">'+modStrings[57]+"</div></div></div>";

myString+="whatIsIt"!==i?'<div id="introBlueGoArra">'+modStrings[59]+"</div>":'<div id="introBlueGoArra">'+modStrings[69]+"</div>",

$("#contentSign").html(myString);
chngArraSign($(".arraSign"),groundCol,strokeCol);

$("#introBlueGoArra")
.on(pStart,function(){myString=$(this).text();setStatusString(myString)}).on(pEnd,function(){setStatusString(defaultStatusString);})
.on(pUp,function(){playInterface("click1");if(i=="yesNo"){fourth()}else if(i=="eitherOr"){fifth()}else if(i=="introLang"){third()}else{loadPage("games");}});

$("#introBlueAgain")
.on(pStart,function(){chngArraSign($(this),"#fff","#000");myString=$(this).text();setStatusString(myString)}).on(pEnd,function(){chngArraSign($(this),groundCol,strokeCol);setStatusString(defaultStatusString);})
.on(pUp,function(){playInterface("click1");if(i=="yesNo"){third()}else if(i=="eitherOr"){fourth()}else if(i=="introLang"){second()}else{fifth()}
});

}

function sharedInterface(i){
$("#introBlueGoArra").off(pStart).off(pEnd),$("#a1,#a2,#a3,#a4").off(pStart).off(pEnd),
$("#back").css("visibility","visible"),
$("#contentSign").empty(),$("#content").empty(),
html='<div id="hPipe3"><div class="pipeH"></div></div><div id="hPipe4"><div class="pipeH"></div></div><div id="hPipe5"><div class="pipeH"></div></div><div id="hPipe6"><div class="pipeH"></div></div><div id="sign_leftPipe"><div class="pipeV"></div></div><div id="sign_middle1"><div class="pipeV"></div></div><div id="sign_middle2"><div class="pipeV"></div></div><div id="sign_rightPipe"><div class="pipeV"></div></div>',html+='<div id="infoSign"><div id="infoBrownTitle"></div><div id="infoBrownText"></div></div>',html+='<div id="navSignTut"><div id="a1"><div class="arraSign">'+arra206+'<div class="arraLabel206a">'+modStrings[13]+'</div></div></div><div id="a2"><div class="arraSign">'+arra206+'<div class="arraLabel206a">'+modStrings[14]+'</div></div></div><div id="a3"><div class="arraSign">'+arra206+'<div class="arraLabel206a">'+modStrings[15]+'</div></div></div><div id="a4">',html+='<div class="arraSign">'+arra206+'<div class="arraLabel206a">'+modStrings[16]+"</div></div></div></div>",html+='<div id="contentSign" style="background-color:'+groundCol+';border-color:'+strokeCol+'"><div id="introBlueTitle" style="color:'+strokeCol+'"></div><div id="introBlueText" style="color:'+strokeCol+'"></div><div id="introBlueGoArra"></div></div>',$("#content").append(html);
//on green nav arras color for level
chngArraSign($(".arraSign"),groundCol,strokeCol);

$(".arraSign").on(pStart,function(){chngArraSign($(this),"#fff","#000")}).on(pEnd,function(){chngArraSign($(this),groundCol,strokeCol)});
$("#introBlueGoArra").on(pStart,function(){myString=$(this).text(),setStatusString(myString)});
$("#a1,#a2,#a3,#a4").on(pStart,function(){myString=$(this).text(),setStatusString(myString)}).on(pUp,function(){playInterface("click1");var i=$(this).attr("id");"a1"==i?second():"a2"==i?third():"a3"==i?fourth():fifth()}),myString=1==i?modStrings[13]:2==i?modStrings[14]:3==i?modStrings[15]:modStrings[16],$("#a"+i).html('<div class="navArraSelected"><p style="margin-left:22px;line-height:30px">'+myString+"</p></div>")
}

function second(){
function i(i){var t='<img class="introPic" src="'+bigPicsURL+picsarray[i]+'.png" width="310px" height="310px" />';$(".introPicG").html(t),$("#introLabel").css({"font-size":"100px","line-height":"125px"}),$("#introLabel").text(labelsarray[i]),reduceToHtWdth("#introLabel"),$("#sign2_count").text(i+1+" / "+numPics),playAudio("t",picsarray[i])}
function t(){$("#contentSign").empty(),sharedEndInterface("introLang"),defaultStatusString=modStrings[52],setStatusString(defaultStatusString),$("#introBlueTitle").text(modStrings[37]),myString="<p>"+modStrings[38]+"<br />"+modStrings[39]+"<br /><br />"+modStrings[40]+"<br />",myString2=modStrings[43].replace("xxx",modStrings[23]),myString+=myString2,$("#introBlueText").html(myString)}
playInterface("click1"),sharedInterface(1),defaultStatusString=modStrings[52],setStatusString(defaultStatusString),$("#infoBrownTitle").text(modStrings[30]),myString=modStrings[18]+"<br />"+modStrings[21]+"<br /><br />"+modStrings[19]+"<br />"+modStrings[22],$("#infoBrownText").html(myString),$("#introBlueTitle").text(modStrings[30]),myString="<p>"+modStrings[31]+"<br />"+modStrings[32]+"<br />"+modStrings[33]+"<br /><br />"+modStrings[34],myString+="en"==shortCode?"<br />":" ",myString+=modStrings[35]+"<br />"+modStrings[36]+"</p>",$("#introBlueText").html(myString),$("#introBlueGoArra").text(modStrings[17]);

$("#introBlueGoArra").on(pUp,function(){playInterface("click1"),setDefaultString(),picNum=0,$("#contentSign").empty(),html='<div id="sign2_count"></div><div id="pipe2_phone"><div class="pipeV"></div></div><div id="transSign">'+shortCode+'</div><div id="sign2_phone"><div id="sign2_phoneGraphic">'+phone(17,"#fff")+'</div></div><div id="contentSignPicLab"><div class="introPicG"></div><div id="introLabel" style="color:'+strokeCol+'"></div></div><div id="introPrev" style="background-color:'+groundCol+';border-color:'+strokeCol+'"><div id="introG">'+arraSm(42,strokeCol,1)+'</div></div><div id="introNext" style="background-color:'+groundCol+';border-color:'+strokeCol+'"><div id="introG">'+arraSm(42,strokeCol,0)+"</div></div>",
$("#contentSign").append(html);

$("#sign2_phone,#transSign").off(pStart).off(pEnd).on(pStart,function(e){e.preventDefault();
$(this).css("background-color","#000");
})
.on(pEnd,function(e){e.preventDefault();
$(this).css("background-color","#630");
});

$("#sign2_phone").on(pUp,function(){
$(this).css("background-color",signBrown);
playAudio("t",picsarray[picNum]);
});

$("#transSign").on("mousedown touchstart",function(e){e.stopPropagation();e.preventDefault();if(e.handled!==true){$("#introLabel").text(translate(picNum,1));reduceToHtWdth("#introLabel");e.handled=true}else{return false}})
.on("mouseup touchend",function(e){e.stopPropagation();e.preventDefault();if(e.handled!==true){$("#introLabel").text(translate(picNum,0));reduceToHtWdth("#introLabel");e.handled=true}else{return false}});

$("#introNext,#introPrev").off(pStart).off(pEnd).on(pStart,function(e){
e.stopPropagation();e.preventDefault();
$(this).css("background-color",xStrokeCol);
})
.on(pEnd,function(e){
e.stopPropagation();e.preventDefault();
$(this).css("background-color",groundCol);
});
$("#introNext").on(pUp,function(e){
e.stopPropagation();e.preventDefault();
picNum<numPics-1?(picNum+=1,i(picNum)):t();}),
$("#introPrev").on(pUp,function(e){
e.stopPropagation();e.preventDefault();
picNum>0&&(picNum-=1,i(picNum));});

i(picNum);

});

}

function prepareActivityArrays(){myArray="primary"==level?[0,1,2,3,4,5,6,7,8,9]:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],shuffle(myArray),starPicsArray=myArray.slice(),picNum=myArray.shift(),count=0}

// //////////////////////////////////////////////////////////
//what is it

function fifth(){rightAnswers=0,sharedInterface(4),defaultStatusString=modStrings[56],setStatusString(defaultStatusString),$("#infoBrownTitle").text(modStrings[28]),$("#infoBrownText").text(modStrings[29]),myString=modStrings[28],myString=modStrings[42].replace("xxx",myString),$("#introBlueTitle").text(myString),myString="<p>"+modStrings[45]+"<br />"+modStrings[47]+"<br /><br />"+modStrings[48]+"</p>",$("#introBlueText").html(myString),myString=modStrings[66].replace("xxx",""),$("#introBlueGoArra").text(myString),prepareActivityArrays();

if(rippleTest==true){
whatIsThis=new Howl({urls:[whatIsThis]});
}else{
whatIsThis=new Media(whatIsThis,function(){isThisEOH.release();},function(err){console.log(err);});
}

$("#introBlueGoArra").on(pUp,function(){playInterface("click1");
$("#contentSign").empty();defaultStatusString=modStrings[56];setStatusString(defaultStatusString);

html='<div id="sign5_count">'+count+"/"+numPics+'</div><div id="contentSignPic5"></div><div class="wiL" id="labels1"><div id="labelText1"></div></div><div class="wiL" id="labels2"><div id="labelText2"></div></div><div class="wiL" id="labels3"><div id="labelText3"></div></div><div class="wiL" id="labels4"><div id="labelText4"></div></div><div class="wiL" id="labels5"><div id="labelText5"></div></div>';$("#contentSign").append(html);j=184;

for(i=1;i<6;i++){html='<div class="SpeakerWII" id="speaker-'+i+'"><div style="padding:9px 5px;">'+speaker(29,strokeCol)+"</div></div>";$("#contentSign").append(html);


$("#labels"+i).css({"top":j,"background-color":groundCol,"border-color":strokeCol,"color":strokeCol}).hide();

$("#speaker-"+i).css({"top":j,"background-color":groundCol,"border-color":strokeCol}).hide();
j+=48

}
$(".wiL, .SpeakerWII").off(pStart)
.on(pStart,function(e){
e.stopPropagation();e.preventDefault();
$(this).css({"background-color":xStrokeCol,"color":strokeCol});
});
//cant attach to speaker cause array defined each time
$(".wiL")
.off(pEnd).on(pEnd,function(e){e.stopPropagation();e.preventDefault();
$(this).css({"background-color":groundCol,"color":strokeCol});
})
.on(pUp,whatIsItLabListener);
addStars(2);
whatIsItPicAndQ()})

}

function whatIsItLabListener(){myString=$(this).attr("name");if(answer1==myString){correct=true}else{correct=false}havingAnsweredWII()}

function whatIsItPicAndQ(){
count+=1;if(count>=numPics+1){whatIsItFinished()}else{
if(level=="primary"){multipleChoiceArray=[0,1,2,3,4,5,6,7,8,9]}else{multipleChoiceArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]}
var e=multipleChoiceArray.indexOf(picNum);
multipleChoiceArray.splice(e,1);
shuffle(multipleChoiceArray);

$("#sign5_count").text(count+"/10");
answer1=labelsarray[picNum];
k=returnRandom(5);
multipleChoiceArray[k]=picNum;myString='<img src="'+bigPicsURL+picsarray[picNum]+'.png" width="150px" />';$("#contentSignPic5").html(myString);whatIsThis.play();setTimeout(function(){whatIsItLabs()},1800)}}

function whatIsItLabs(){var e,t;for(i=1;i<6;i++){e="#labels"+i;myString=labelsarray[multipleChoiceArray[i-1]];$(e).attr("name",myString);$("#labelText"+i).css({"font-size":"32px","line-height":"40px"}).text(myString);$(e).show();

reduceToOneLine("#labelText"+i);

$("#speaker-"+i).show()}


$(".SpeakerWII").off(pEnd).on(pEnd,function(e){e.stopPropagation();e.preventDefault();$(this).css({"background-color":groundCol,"color":strokeCol});}).on(pUp,function(){myString=$(this).attr("id");k=parseFloat(myString.substring(8));k-=1;j=multipleChoiceArray[k];playAudio("t",picsarray[j])});


}

function havingAnsweredWII(){setTimeout(function(){havingAnsweredWIITwo()},400);if(correct==true){playInterface("highPop");starRight(2);rightAnswers+=1}else{wrongOverlay("whatIsIt");playInterface("wrong");starWrong(2)}for(i=1;i<6;i++){$("#labels"+i).hide();$("#speaker-"+i).hide()}}

function havingAnsweredWIITwo(){1==correct&&(picNum=myArray.shift(),whatIsItPicAndQ())}

function whatIsItFinished(){$("#contentSign").empty(),sharedEndInterface("whatIsIt"),defaultStatusString=modStrings[60],setStatusString(defaultStatusString),myString=modStrings[42].replace("xxx",""),myString=modStrings[28]+myString,$("#introBlueTitle").text(myString),myString=modStrings[41].replace("xxx",modStrings[28]),myString2="<p>"+myString+"<br />",myString=modStrings[44].replace("xxx",rightAnswers),myString+="en"==shortCode?"<br /><br />":"<br />",myString2+=myString+modStrings[40]+"<br />",myString=modStrings[51],myString2+=myString,$("#introBlueText").html(myString2),i="primary"==level?rightAnswers>8?1:rightAnswers>6?2:rightAnswers>4?3:4:rightAnswers>16?1:rightAnswers>12?2:rightAnswers>8?3:4,$("#infoBrownTitle").html('<div id="smilieGraphic'+i+'"></div>'),$("#infoBrownText").html('<p style="font-size:19px;margin-top:120px">'+rightAnswers+' / '+numPics+'</p>')}

/////////////////////////////////////////////////////////////////////////////////
//fourth = = either or
function fourth(){rightAnswers=0,sharedInterface(3),defaultStatusString=modStrings[55],setStatusString(defaultStatusString),$("#infoBrownTitle").text(modStrings[26]),$("#infoBrownText").text(modStrings[27]),myString=modStrings[26],myString=modStrings[42].replace("xxx",myString),$("#introBlueTitle").text(myString),myString="<p>"+modStrings[45]+"<br />"+modStrings[46]+"<br /><br />"+modStrings[48]+"</p>",$("#introBlueText").html(myString),myString=modStrings[66].replace("xxx",""),$("#introBlueGoArra").text(myString),prepareActivityArrays();
/*
isThisEOH=new Howl({urls:[isThisEO],autoplay:!1,onend:function(){eoPlayTwo()}}),orIsItH=new Howl({urls:[orIsIt],autoplay:!1,onend:function(){eoPlayFour()}});
*/
if(rippleTest==true){
isThisEOH=new Howl({urls:[isThisEO],autoplay:!1,onend:function(){eoPlayTwo()}});
orIsItH=new Howl({urls:[orIsIt],autoplay:!1,onend:function(){eoPlayFour()}});
}else{
isThisEOH=new Media(isThisEO,function(){isThisEOH.release();eoPlayTwo();},function(err){ console.log("playAudio():Audio Error: " + err);});
orIsItH=new Media(orIsIt,function(){orIsItH.release();eoPlayFour();},function(err){console.log("playAudio():Audio Error: " + err);});
}

$("#introBlueGoArra").on(pUp,function(){playInterface("click1"),$("#contentSign").empty(),defaultStatusString=modStrings[55],setStatusString(defaultStatusString),html='<div id="sign3_count">'+count+"/"+numPics+'</div><div id="contentSignPicLab"><div class="introPicG"></div><div id="eitherOrLabel1" style="background-color:'+groundCol+';border-color:'+strokeCol+';color:'+strokeCol+'"><div id="eitherOrLabelText1"></div></div><div id="eitherOrLabel2" style="background-color:'+groundCol+';border-color:'+strokeCol+';color:'+strokeCol+'"><div id="eitherOrLabelText2"></div></div></div>',$("#contentSign").append(html),html='<div id="sign4_phone1" style="background-color:'+groundCol+';border-color:'+strokeCol+'"><div class="phoneGraphicEO">'+speaker(24,strokeCol)+'</div></div><div id="sign4_phone2" style="background-color:'+groundCol+';border-color:'+strokeCol+'"><div class="phoneGraphicEO">'+speaker(24,strokeCol)+"</div></div>",$("#contentSign").append(html);addStars(1);

$("#eitherOrLabel1,#eitherOrLabel2,#sign4_phone1,#sign4_phone2").off(pStart).off(pEnd).on(pStart,function(e){
e.stopPropagation();e.preventDefault();
$(this).css({"background-color":xStrokeCol,"color":strokeCol});
})
.on(pEnd,function(e){e.stopPropagation();e.preventDefault();
$(this).css({"background-color":groundCol,"color":strokeCol});
})

$("#eitherOrLabel1").on(pUp,onClick1);
$("#eitherOrLabel2").on(pUp,onClick2);

$("#sign4_phone1").on(pUp,function(){playAudio("t",eoAudioArray[0])});
$("#sign4_phone2").on(pUp,function(){playAudio("t",eoAudioArray[1])});

eitherOrPicAndQ(picNum);

})

}

function setWrongAnswer(i){returnDifferentRandom(numPics,picNum),1==i?(answer1=labelsarray[rndNum],eoAudioArray[0]=picsarray[rndNum]):(answer2=labelsarray[rndNum],eoAudioArray[1]=picsarray[rndNum])}

function eitherOrPicAndQ(i){
count+=1;
if(count>=numPics+1){
onEitherOrFinished()
} else {
myString=count+"/"+numPics;
$("#sign3_count").text(myString);
answerTrue=Math.floor(Math.random()*2);
if(answerTrue==1){
answer1=labelsarray[i];eoAudioArray[0]=picsarray[i];setWrongAnswer(2)
}else{
answer2=labelsarray[i];eoAudioArray[1]=picsarray[i];setWrongAnswer(1)
}


if(rippleTest==true){
eoAns1=new Howl({urls:[soundURL+ilanguage+"/"+eoAudioArray[0]+".mp3"],onend:function(){eoPlayThree()}});
eoAns2=new Howl({urls:[soundURL+ilanguage+"/"+eoAudioArray[1]+".mp3"]});
}else{
//  ***********************************************************
eoAns1=new Media(soundURL+ilanguage+"/"+eoAudioArray[0]+".mp3",function(){eoAns1.release();eoPlayThree();},function(err){console.log("playAudio():Audio Error: " + err);});
eoAns2=new Media(soundURL+ilanguage+"/"+eoAudioArray[1]+".mp3",function(){eoAns2.release();},function(err){console.log("playAudio():Audio Error: " + err);});
}

$("#eitherOrLabelText1").text(answer1).css({"font-size":"28px","line-height":"34px"}),$("#eitherOrLabelText2").text(answer2).css({"font-size":"28px","line-height":"34px"}),$("#eitherOrLabel1,#eitherOrLabel2").css("border-color",strokeCol),myString='<img class="introPic" src="'+bigPicsURL+picsarray[i]+'.png" width="310px" height="310px" />',$(".introPicG").html(myString),

isThisEOH.play();
}
}

function eoPlayTwo(){
eoAns1.play();
$("#eitherOrLabel1").show(),reduceToOneLine("#eitherOrLabelText1");
}

function eoPlayThree(){
orIsItH.play();
}

function eoPlayFour(){
eoAns2.play();
$("#eitherOrLabel2").show();reduceToOneLine("#eitherOrLabelText2");



$("#sign4_phone1,#sign4_phone2").show()}

function onClick1(){correct=1==answerTrue?!0:!1,havingAnsweredEO()}
function onClick2(){correct=1==answerTrue?!1:!0,havingAnsweredEO()}

function havingAnsweredEO(){setTimeout(function(){havingAnsweredEO2()},400),1==correct?(playInterface("highPop"),rightAnswers+=1,starRight(1)):(wrongOverlay("eitherOr"),playInterface("wrong"),starWrong(1))}

function havingAnsweredEO2(){
$("#eitherOrLabel1,#eitherOrLabel2,#sign4_phone1,#sign4_phone2").hide(),1==correct&&(picNum=myArray.shift(),eitherOrPicAndQ(picNum))

}

function onEitherOrFinished(){$("#contentSign").empty(),sharedEndInterface("eitherOr"),defaultStatusString=modStrings[60],setStatusString(defaultStatusString),myString=modStrings[42].replace("xxx",""),myString=modStrings[26]+myString,$("#introBlueTitle").text(myString),myString=modStrings[41].replace("xxx",modStrings[26]),myString2="<p>"+myString+"<br />",myString=modStrings[44].replace("xxx",rightAnswers),myString+="en"==shortCode?"<br /><br />":"<br />",myString2+=myString+modStrings[40]+"<br />",myString=modStrings[43].replace("xxx",modStrings[28]),myString2+=myString,$("#introBlueText").html(myString2),i="primary"==level?rightAnswers>8?1:rightAnswers>6?2:rightAnswers>4?3:4:rightAnswers>16?1:rightAnswers>12?2:rightAnswers>8?3:4,$("#infoBrownTitle").html('<div id="smilieGraphic'+i+'"></div>'),$("#infoBrownText").html('<p style="margin-top:120px;font-size:19px">'+rightAnswers+' / '+numPics+'</p>')}

function third(){
//yes or no
rightAnswers=0,
sharedInterface(2),
defaultStatusString=modStrings[53],
setStatusString(defaultStatusString),$("#infoBrownTitle").text(modStrings[23]),myString=modStrings[24]+modStrings[25],$("#infoBrownText").html(myString),
myString=modStrings[23],
myString=modStrings[42].replace("xxx",myString),
$("#introBlueTitle").text(myString),myString="<p>"+modStrings[49]+"<br />"+modStrings[50]+"<br /><br />"+modStrings[24]+"<br />"+modStrings[25]+"</p>",$("#introBlueText").html(myString),


$("#introBlueGoArra").text(modStrings[58]),
prepareActivityArrays();

if(rippleTest==true){
isThisH=new Howl({urls:[isThis],autoplay:!1,onend:function(){yesNoLabAndButtons()}});
}else{
isThisH=new Media(isThis,function () { isThisH.release();yesNoLabAndButtons(); },function (err) { console.log("playAudio():Audio Error: " + err); } );
}
$("#introBlueGoArra").on("click",function(){playInterface("click1"),$("#contentSign").empty(),defaultStatusString=modStrings[53],setStatusString(defaultStatusString),html='<div id="sign3_count">'+count+"/"+numPics+'</div><div id="contentSignPicLab"><div class="introPicG"></div><div id="yesNoLabel" style="color:'+strokeCol+';border-color:'+strokeCol+'"><div id="yesNoLabelText"></div></div></div>',$("#contentSign").append(html),html='<div id="sign3_yes" style="background-color:'+groundCol+';border-color:'+strokeCol+'"><div id="graphic3_yes"></div></div><div id="sign3_no" style="background-color:'+groundCol+';border-color:'+strokeCol+'"><div id="graphic3_no"></div></div>',$("#contentSign").append(html),$("#sign3_yes,#sign3_no").hide(),addStars(1);

$("#sign3_yes, #sign3_no").off(pStart).off(pEnd).on(pStart,function(e){
e.stopPropagation();e.preventDefault();
$(this).css({"background-color":"#fff","border-color":"#000"});
})
.on(pEnd,function(e){e.stopPropagation();e.preventDefault();
$(this).css({"background-color":groundCol,"border-color":strokeCol});
})
/*
$("#sign3_yes, #sign3_no").on("touchstart",function(){
$(this).css({"background":"white","border":"2px solid black"});
}).on("touchend",function(){
$(this).css({"background":groundCol,"border":"2px solid "+strokeCol});
});
*/
$("#sign3_yes").on(pUp,onClickYes),
$("#sign3_no").on(pUp,onClickNo),yesNoPicAndQ(picNum)})

}

function yesNoPicAndQ(e){
count+=1;
if(count>=numPics+1){
onYesNoFinished()}else{
$("#sign3_count").text(count+"/"+numPics);var t='<img class="introPic" src="'+bigPicsURL+picsarray[e]+'.png" width="310px" height="310px" />';$(".introPicG").html(t);isThisH.play()
}
}

function yesNoLabAndButtons(){
answerTrue=returnRandom(2);
if(answerTrue==1){myString=labelsarray[picNum];playAudio("t",picsarray[picNum])}
else{
returnDifferentRandom(numPics,picNum);myString=labelsarray[rndNum];playAudio("t",picsarray[rndNum])
}
$("#yesNoLabelText").text(myString).css({"font-size":"45px","line-height":"70px"});
$("#yesNoLabel,#sign3_yes,#sign3_no").show();
/*
i=getRows($("#yesNoLabelText"));
if(i>1){var t=document.getElementById("yesNoLabelText");reduceFontToFitHeight(t,64,60,"150%")}
i=getRows($("#yesNoLabelText"));
if(i==1){$("#yesNoLabelText").css("margin-top","12px")}
*/
reduceToHtWdth("#yesNoLabelText");
i=$("#yesNoLabelText").css("font-size");i=parseInt(i);j=$("#yesNoLabelText").css("line-height");
console.log('i='+i+' line-height='+j);
/*if(i<28){$("#yesNoLabelText").css("line-height","35px")}*/
}

function onClickYes(){correct=1==answerTrue?!0:!1,havingAnswered()}
function onClickNo(){correct=0==answerTrue?!0:!1,havingAnswered()}
function havingAnswered(){setTimeout(function(){havingAnswered2()},400),1==correct?(playInterface("highPop"),rightAnswers+=1,starRight(1)):(playInterface("wrong"),wrongOverlay("yesNo"),starWrong(1))}
function havingAnswered2(){$("#yesNoLabel,#sign3_yes,#sign3_no").hide(),1==correct&&(picNum=myArray.shift(),yesNoPicAndQ(picNum))}

function onYesNoFinished(){$("#contentSign").empty(),sharedEndInterface("yesNo"),defaultStatusString=modStrings[60],setStatusString(defaultStatusString),myString=modStrings[42].replace("xxx",""),myString=modStrings[23]+myString,$("#introBlueTitle").text(myString),myString=modStrings[41].replace("xxx",modStrings[23]),myString2="<p>"+myString+"<br />",myString=modStrings[44].replace("xxx",rightAnswers),myString+="en"==shortCode?"<br /><br />":"<br />",myString2+=myString+modStrings[40]+"<br />",myString=modStrings[43].replace("xxx",modStrings[26]),myString2+=myString,$("#introBlueText").html(myString2),i="primary"==level?rightAnswers>8?1:rightAnswers>6?2:rightAnswers>4?3:4:rightAnswers>16?1:rightAnswers>12?2:rightAnswers>8?3:4,$("#infoBrownTitle").html('<div id="smilieGraphic'+i+'"></div>'),$("#infoBrownText").html('<p style="font-size:19px;margin-top:120px">'+rightAnswers+' / '+numPics+'</p>')}

function wrongOverlay(i){myString3=modStrings[64],"whatIsIt"!==i?(myString2=labelsarray[picNum],myString=1==answerTrue?modStrings[61]:modStrings[62],myString=myString+"<br />"+modStrings[63],html='<div id="wrongBgSign"><div id="wrongTitle">'+modStrings[54]+'</div><div id="wrongText1">'+myString+'</div><div id="wrongRightAnswer">'+myString2+'</div><div id="wrongOKbtn">OK</div><div id="wrongPic"><img src="'+bigPicsURL+picsarray[picNum]+'.png" width="310px" height="310px" /></div><div id="wrongTextTwo">'+myString3+"</div></div>"):(myString=modStrings[65]+"<br />"+modStrings[63],html='<div id="wrongBgSign"><div id="wrongTitle">'+modStrings[54]+'</div><div id="wrongText1">'+myString+'</div><div id="wrongRightAnswer">'+answer1+'</div><div id="wrongOKbtn">OK</div><div id="wrongPic"><img src="'+bigPicsURL+picsarray[picNum]+'.png" width="310px" height="310px" /></div><div id="wrongTextTwo">'+myString3+"</div></div>"),$("#content").append(html),$("#wrongOKbtn").off("click").on("click",function(){$("#wrongBgSign").remove(),picNum=myArray.shift(),"yesNo"==i?yesNoPicAndQ(picNum):"eitherOr"==i?eitherOrPicAndQ(picNum):whatIsItPicAndQ()})}

function starRight(e){if(e!==2){myString="#star"+count}else{myString="#WIIstar"+count}$(myString).html('<div class="star-right"></div>').on(pStart,{answer:"right"},starShowBox).on(pEnd,starClearBox)}

function starShowBox(e){if(starBoxVisible==false){var t=e.data.answer;myString=$(this).attr("id");if(myString.substring(0,1)=="s"){i=myString.substring(4)}else{i=myString.substring(7)}var n=starPicsArray[i-1];offset=$(this).offset();if(t=="right"){myString="starBoxRight"}else{myString="starBoxWrong"}html='<div id="'+myString+'"><div id="starBC"><img src="'+bigPicsURL+picsarray[n]+'.png" width="40px" height="40px" />&nbsp;&nbsp;'+labelsarray[n]+"</div></div>";$("#contentSign").append(html);myString="#"+myString;i=labelsarray[n].length;if(i>40){j=16;k=0}else if(i>30){j=20;k=-1}else{j=24;k=-6}$(myString).css("font-size",j);myString2=myString+" img";$(myString2).css("top",k);width=$(myString).width();xLoc=offset.left-width-20;yLoc=offset.top-12;$("#starBoxRight,#starBoxWrong").offset({top:yLoc,left:xLoc});$("#starBoxRight,#starBoxWrong").on(pEnd,starClearBox);starBoxVisible=true}}

function starClearBox(){$("#starBoxRight").remove(),$("#starBoxWrong").remove(),starBoxVisible=!1}
function starWrong(i){myString=2!==i?"#star"+count:"#WIIstar"+count,$(myString).html('<div class="star-wrong"></div>').on("mouseenter",{answer:"wrong"},starShowBox).on("mouseleave",starClearBox).on("mouseenter",{answer:"wrong"},starShowBox)}

function addStars(t){if(1==t){"primary"==level?(html='<div id="starsPrimary">',i=11):(html='<div id="starsSecondary">',i=21);for(var r=1;r<i;r++)html+='<div id="star'+r+'"><div class="star-grey"></div></div>'}else{"primary"==level?(html='<div id="starsPrimaryWII">',i=11):(html='<div id="starsSecondaryWII">',i=21);for(var r=1;r<i;r++)html+='<div id="WIIstar'+r+'"><div class="star-grey"></div></div>'}html+="</div>",$("#contentSign").append(html)}

}
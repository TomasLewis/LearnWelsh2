function four_in_a_row(){
console.log('four_in_a_row');
var checkList=[],myCurrentOccupiers=[],gameWon=false,timerID=0,winList,winMusic=1,cellNumber,clickCount=0,correctAnswers=0,timerTime=0,win1=[1,2,3,4],win2=[2,3,4,5],win3=[6,7,8,9],win4=[7,8,9,10],win5=[11,12,13,14],win6=[12,13,14,15],win7=[16,17,18,19],win8=[17,18,19,20],win9=[1,6,11,16],win10=[2,7,12,17],win11=[3,8,13,18],win12=[4,9,14,19],win13=[5,10,15,20],win14=[1,7,13,19],win15=[2,8,14,20],win16=[4,8,12,16],win17=[5,9,13,17],win=[win1,win2,win3,win4,win5,win6,win7,win8,win9,win10,win11,win12,win13,win14,win15,win16,win17],answersArray,ans,ht=40;

gameStart();

function goBack(){location.reload()}

function gameStart(){
console.log('four_in_a_row gameStart');
if(level!=='primary'){
$("#sign,#overlaySign,.speaker,.label").css({"background-color":groundCol,"border-color":strokeCol,"color":strokeCol});
}
$("#gameSettings").remove();

function timeCount(){timerTime+=1;$("#sign_brown_time").text(timerTime+" "+sec)}

$("#game").css("visibility","visible");

$(".label").on(pStart,function(){$(this).css({"background-color":"#000","border-color":"#000",color:"white"});playInterface("click1")})
.on(pEnd,function(){$(this).css({"background-color":groundCol,"border-color":strokeCol,color:strokeCol})}).on(pUp,onClickLabel);
$(".speaker").html(speaker(ht,strokeCol)).on(pStart,function(){$(this).css({"background-color":"#fff","border-color":"#000"}).find(".sp1,.sp2,.sp3").css({fill:"#000"})}).on(pEnd,function(){$(this).css({"background-color":groundCol,"border-color":strokeCol}).find(".sp1,.sp2,.sp3").css({fill:strokeCol})}).on(pUp,onClickSpeaker);


if(level=="primary"){myArray=[0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]}else{myArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]}shuffle(myArray);gameWon=false;defaultStatusString=modStrings[5];$("#statusBar").text(defaultStatusString);$("#back").css("visibility","visible");timerID=setInterval(timeCount,1e3);
$("#sign_brown_count").text("0 / 0");

html="";
for(i=0;i<20;i++){j=i+1;html+='<div class="cell" id="cell'+j+'" name="'+myArray[i]+'"><img src="'+smallPicsURL+picsarray[myArray[i]]+'.png" width="90px" height="90px" /></div>'}
$("#grid").append(html);$("#grid").off();$("#overlaySign").off();$("#grid").on(pUp,"div",onClickPicture);$("#overlaySign").on(pUp,"div",onClickLabel)

}

function onClickPicture(e){
playInterface("click1");k=$(this).attr("name");ans=labelsarray[k];cellNumber=$(this).attr("id");$("#overlaySign").css("visibility","visible");$("#overlayPic").html('<img src="'+smallPicsURL+picsarray[k]+'.png" width="115px" height="115px" />');if(k>14){answersArray=labelsarray.slice(15)}else if(k>9){answersArray=labelsarray.slice(10,15)}else if(k>4){answersArray=labelsarray.slice(5,10)}else{answersArray=labelsarray.slice(0,5)}shuffle(answersArray);$(".labT").css({"font-size":"30px"});

for(i=1;i<6;i++){
$("#labelsText"+i).html(answersArray[i-1]);
if(answersArray[i-1].length>44){$("#labelsText"+i).css({"font-size":"27px"})}
$("#speaker-"+i).attr("name",answersArray[i-1])
}
}

function onClickLabel(e){e.stopPropagation();clickCount+=1;myString=$(this).find("[id^=labelsText]").text();if(myString==ans){playInterface("highPop");correctAnswers+=1;$("#"+cellNumber).html("");myString=cellNumber.substring(4);var t=parseInt(myString);t-=1;myCurrentOccupiers[t]="X";onCheckForDone()}else{playInterface("wrong")}$("#overlaySign").css("visibility","hidden");$("#sign_brown_count").text(correctAnswers+" / "+clickCount);if(gameWon==true){doWinThings()}}

function onClickSpeaker(e){e.stopPropagation();i=$(this).attr("name");j=labelsarray.indexOf(i);playAudio("t",picsarray[j])}

function doWinThings(){
/*
var e=45,t,n,r,i,s,o;
k=win[winList][0];
t=$("#cell"+k);
n=t.position();
n.left=Math.floor(n.left)+e;
n.top=Math.floor(n.top)+e;
k=win[winList][3];
r=$("#cell"+k);
i=r.position();
i.left=Math.floor(i.left)+e;
i.top=Math.floor(i.top)+e;
console.log('n.left='+n.left+' n.top='+n.top+' i.left='+i.left+' i.top='+i.top);
html='<div id="winCanvDiv"><canvas id="myCanvas" width="500" height="400"; ></canvas></div>';
$("#grid").append(html);
o=document.getElementById("myCanvas");
if(o.getContext){s=o.getContext("2d");s.lineWidth=15;s.lineCap="round";s.strokeStyle="#ff0000";s.beginPath();s.moveTo(n.left,n.top);s.lineTo(i.left,i.top);s.stroke()}
*/
$("#grid,#overlaySign").off();clearInterval(timerID);defaultStatusString=modStrings[8];$("#statusBar").text(defaultStatusString);
jQuery.getJSON("json/endGame.json", function(data){
i=data.htm;
$("#modContent").append(i);
gameEnd();
});

}

function onCheckForDone(){checkList=[0,0,0,0];for(i=0;i<17;i++){for(j=0;j<4;j++){k=win[i][j];if(myCurrentOccupiers[k-1]!="X"){checkList[j]=0}else{checkList[j]=1}}if(checkList[0]==1&&checkList[1]==1&&checkList[2]==1&&checkList[3]==1){gameWon=true;winList=i}checkList=[0,0,0,0]}return 0}
}
function settings_page_games(){
var i,lblTop,lblFntS,htm0='<style>#gameSettings{left:0}#tLeftP,#tRightP,#aLeftP,#pRightP{position:absolute;left:240px;width:12px;height:473px;z-index:0;}#tRightP{left:506px;}#aLeftP,#pRightP{left:90px;top:152px;height:319px;}#pRightP{left:680px;}#title_sign,#aim_sign,#method_sign,#changeTopicButton{display:block;position:absolute}#title_sign,#aim_sign,#method_sign,#sett_play_sign,.onGreenBtn{box-shadow:2px 2px 7px #333;}#title_sign{top:15px;left:30px;width:610px;text-align:center;padding:6px 40px;background:white;border:solid 8px black;border-radius:15px;font-size:44px;font-weight:700;color:black;}#aim_sign{left:30px;top:125px;width:391px;padding:5px;background:#663300;border:solid 4px white;border-radius:10px;font-size:18px;font-weight:600;color:white;}#method_sign{left:29px;top:205px;width:378px;height:231px;padding:14px 10px 0 15px;background:#FAA634;border:solid 3px black;border-radius:10px;font-size:16px;font-weight:600;color:black;text-align:left;}#sett_play_sign{display:block;position:absolute;left:450px;top:125px;width:265px;height:310px;background:#00703C;border:solid 5px white;border-radius:15px;font-size:18px;font-weight:600;color:white;padding:5px;}#playButton{position:absolute;top:15px;left:15px;cursor:pointer;width:245px;height:55px;}#playG{position:absolute;}.onGreenBtn{padding:10px;border:2px solid white;border-radius:9px;background:#00703C;cursor:pointer;color:white;font-size:18px;line-height:25px;font-weight:600;text-align:center}.onGreenBtn:hover{background:#000;}#grGr{line-height:1px;font-size:1px;}#game_sett_roads_graphic{position:absolute;left:50px;top:80px;width:90px;height:149px;}#game_sett_current_topic{position:absolute;left:12px;bottom:8px;width:252px;height:52px;text-align:left;overflow:hidden}#changeTopicButton{right:20px;top:110px;}#ctN{width:252px;height:27px;font-size:18px;line-height:24px;}</style><div id="gameSettings"><div id="tLeftP"><div class="pipeV"></div></div><div id="tRightP"><div class="pipeV"></div></div><div id="pRightP"><div class="pipeV"></div></div><div id="title_sign"></div><div id="aLeftP"><div class="pipeV"></div></div><div id="aim_sign"></div><div id="method_sign"></div><div id="sett_play_sign"><div id="changeTopicButton"><div class="onGreenBtn"></div></div><div id="playButton"><div id="playG"></div><div class="arraLabel"></div></div><div id="game_sett_roads_graphic"><svg width="90px" height="171px" viewBox="0 0 60 114"><polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" points="0,9.339 0,113.937 18,113.937 18,99.819 57.551,71.383 60,58 46.351,55.896 18,76.021 18,9.339 9,0.063 0,9.339 "/></svg></div><div id="game_sett_current_topic"><div id="ctT"></div><div id="ctN"></div></div></div></div>';
//console.log('settings_page_games 1');
if(shortCode!=='en'){lblTop='7px';lblFntS='40px'}else{lblTop='11px';lblFntS='50px'}

var overlayStringsEN='["Click on PLAY to start the game, or change topic with the CHANGE TOPIC button","PLAY","CURRENT TOPIC","CHANGE<br />TOPIC","Click this button to go to the Start page to choose a new topic","GAME OVER","PLAY<br />again","do<br />TEST","Game over - choose an option from the top menu or the buttons above","Click this button to play this game again","Click this button to choose a new game to play","Click this button to take the tests for this topic","Click this button to switch the music on and off","CHANGE<br />game","Click on a topic from the list, or switch levels to see other topics"]';
overlayStrings=jQuery.parseJSON(overlayStringsEN);
//console.log('settings_page_games 2');
$("#game").append(htm0);
$("#title_sign").text(modStrings[0]);
$("#aim_sign").text(modStrings[1]);
$("#method_sign").html(modStrings[2]);
//console.log('settings_page_games 3');
reduceToHtWdth("#ctN");
$("#changeTopicButton").find(".onGreenBtn").html(overlayStrings[3]).on(pStart,function(){$(this).css("background-color","#000");setStatusString(overlayStrings[4])}).on(pEnd,function(){$(this).css("background-color",signGreen);setStatusString(defaultStatusString)}).on(pUp,function(){playInterface("click1");loadPage("topics")});
$("#ctT").text(overlayStrings[2]);
$("#ctN").text(displaytopic);

defaultStatusString=overlayStrings[0];setStatusString(defaultStatusString);
myString=overlayStrings[1];$("#playButton").find("#playG").html(arrowSign(250,strokeCol,groundCol,0)).end().find(".arraLabel").css({top:lblTop,width:"220px","font-size":lblFntS,"font-weight":"700","color":strokeCol}).text(myString).end().on(pStart,function(){setStatusString(overlayStrings[1]);chngArraSign($(this),"#fff","#000")}).on(pEnd,function(){setStatusString(defaultStatusString);chngArraSign($(this),groundCol,strokeCol)}).on(pUp,function(){playInterface("click1");gameSettings=0;loadPage(eGameName);});

$("#loading").remove();
gameSettings=0;

}


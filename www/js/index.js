var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		
		//console.log(navB);
		$("#navSign").html(navB);
		//modStrings=jQuery.parseJSON(modStringsEN);
		//
		//console.log(modStrings[0]);
        document.addEventListener('deviceready', this.onDeviceReady, false);
		//*****comment out next line when publish app *****
		//$( document ).ready( this.onBrowserTestReady);
    },
    // deviceready Event Handler
    //*****comment out next line when publish app *****
	//onBrowserTestReady: function() {$.ajax({url: "http://static-iclanguage.net/temp/topics.php",data:'1',type:'POST',dataType:'html', success: function(data){$("#game").html(data);}});},
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
	
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//global prep
		prepApp();
		// Load first page into container
		loadPage("topics");
    }
};

function prepApp(){
	var uiz;
	i=screenHeight/screenWidth;
	
	if(i > 0.6875){
		uiz=screenWidth/800;
	} else if (i <= 0.6875) {
		uiz=screenHeight/550;
	}

$('#container').css({ 
  '-ms-transform'  : 'scale(' + uiz + ')', 
  'transform'  : 'scale(' + uiz + ')'
});

if(device.platform.toLowerCase() === "android"){soundURL="/android_asset/www/"+soundURL;}

if(level=="primary"){numPics=10;}else{numPics=20;}if(topicsSelected=="0"){myString=noTopic}else{myString=displaytopic}$("#currentTopic").text(myString);
if(rippleTest==true){
clickS=new Howl({urls:[soundURL+"interface/click1.mp3"]});highPop=new Howl({urls:[soundURL+"interface/highPop.mp3"]});wrong=new Howl({urls:[soundURL+"interface/wrong.mp3"]});
}
$("#infoButton").on("click",function(){
clickS.play();
if( $("#pageInfoFX").css("display")=="none" ){
$("#pageInfoFX").css("display","block");
} else {
$("#pageInfoFX").css("display","none");
}
});

//nav Buttons
$(".menuArrowSign").on(pStart,function(){
chngArraSign($(this),"#FFF","#000")})
.on(pEnd,function(){chngArraSign($(this),groundCol,strokeCol)})
.on(pUp,function(){
playInterface("click1");
i=$(this).attr("id");
if(i=='menuArrowSign1'){
j="topics";
}else if(i=="menuArrowSign2"){
j="tutorial";
}else if(i=="menuArrowSign3"){
j="games";
}else if(i=="menuArrowSign4"){
j="test";
}
loadPage(j);

 })
}

/**
 * Load page into url
 *
 * @param url           The url to load
 */
function loadPage(url) {
	var jsurl="js/"+url+".js";
	/*
	if(eGameName=='the_frog_flies'){if(gameSettings==0){
	$.getScript("js/phaser230.js", function(){
	console.log('phaser laoded');
	});
	}}
	*/
	
	var hurl=url+".html";
	if(!topic){
		if(url!="topics"){
			alert("Please choose a topic first");
			return;
	}
	}

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState === 4){
            if (xmlhttp.status === 200) {
				$( "#game" ).empty();
                document.getElementById('game').innerHTML = xmlhttp.responseText;
				console.log('html loaded');
				
				$.getScript(jsurl, function(){
    console.log("ajax javascript loaded, gameSettings="+gameSettings);
	if(gameSettings==0){
					console.log('gameSettings=0');
					window[url]();
				}else{
					console.log('gameSettings!=0');
					settings_page_games();
				}
	
	});
				
				

                //post load
				//if game, overlay
				if(topic){$("#currentTopic").text(topic)}
				//close button on infoButton
				$("#close").on("touchstart",function(){
$(this).css({"color":"#000","background":"#fff"}); }).on("touchend",function(){
$(this).css({"color":"#444","background":"#aaa"});
$("#pageInfoFX").css("display","none")});

				
            }
            else {
                document.getElementById('game').innerHTML = "Error loading page " + url;
            }
        }
    };
    xmlhttp.open("GET", hurl , true);
    xmlhttp.send();
}

function changeCol(myCol){document.getElementById("bgColour").style.setProperty("background-color",myCol)}

